import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ChatOpenAI, OpenAIEmbeddings } from '@langchain/openai';
import { HumanMessage, SystemMessage } from '@langchain/core/messages';
import { Pool } from 'pg';
import { PROJECTS, Project } from '../../data/profile.data';

@Injectable()
export class SearchService implements OnModuleInit {
  private readonly logger = new Logger(SearchService.name);
  private readonly embeddings: OpenAIEmbeddings;
  private readonly model: ChatOpenAI;
  private readonly pool: Pool | null;
  private pgReady = false;
  private pgInitStarted = false;

  constructor(configService: ConfigService) {
    const apiKey = configService.get<string>('OPENAI_API_KEY');
    const baseURL = configService.get<string>('OPENAI_BASE_URL');
    const model = configService.get<string>('OPENAI_MODEL') ?? 'gpt-4o';
    const embeddingModel = configService.get<string>('OPENAI_EMBEDDING_MODEL') ?? 'text-embedding-3-small';
    const siteUrl = configService.get<string>('OPENROUTER_SITE_URL');
    const siteName = configService.get<string>('OPENROUTER_SITE_NAME');
    const databaseUrl = configService.get<string>('DATABASE_URL');
    this.embeddings = new OpenAIEmbeddings({
      apiKey,
      model: embeddingModel,
      configuration: {
        baseURL,
        defaultHeaders: {
          ...(siteUrl ? { 'HTTP-Referer': siteUrl } : {}),
          ...(siteName ? { 'X-Title': siteName } : {}),
        },
      },
    });
    this.model = new ChatOpenAI({
      apiKey,
      model,
      temperature: 0.2,
      configuration: {
        baseURL,
        defaultHeaders: {
          ...(siteUrl ? { 'HTTP-Referer': siteUrl } : {}),
          ...(siteName ? { 'X-Title': siteName } : {}),
        },
      },
    });
    this.pool = databaseUrl ? new Pool({ connectionString: databaseUrl }) : null;
  }

  onModuleInit() {
    if (!this.pool) {
      this.logger.warn('DATABASE_URL missing. Semantic search will fallback to in-memory mode.');
      return;
    }
    this.startPgInitInBackground();
  }

  private startPgInitInBackground() {
    if (!this.pool || this.pgInitStarted) {
      return;
    }
    this.pgInitStarted = true;
    void this.initializePgVector();
  }

  private async initializePgVector() {
    if (!this.pool) {
      return;
    }

    try {
      await this.pool.query('CREATE EXTENSION IF NOT EXISTS vector');
      await this.pool.query(`
        CREATE TABLE IF NOT EXISTS project_embeddings (
          title TEXT PRIMARY KEY,
          domain TEXT NOT NULL,
          description TEXT NOT NULL,
          tech_stack TEXT[] NOT NULL,
          metric TEXT NOT NULL,
          embedding vector(1536) NOT NULL
        );
      `);

      for (const project of PROJECTS) {
        const embedding = await this.embeddings.embedQuery(this.projectToText(project));
        const vector = `[${embedding.join(',')}]`;
        await this.pool.query(
          `
          INSERT INTO project_embeddings (title, domain, description, tech_stack, metric, embedding)
          VALUES ($1, $2, $3, $4, $5, $6::vector)
          ON CONFLICT (title)
          DO UPDATE SET domain = EXCLUDED.domain, description = EXCLUDED.description, tech_stack = EXCLUDED.tech_stack, metric = EXCLUDED.metric, embedding = EXCLUDED.embedding;
          `,
          [project.title, project.domain, project.description, project.techStack, project.metric, vector],
        );
      }

      this.pgReady = true;
      this.logger.log('pgvector project embeddings are ready.');
    } catch (error) {
      this.logger.warn(`pgvector init failed, using fallback search. ${String(error)}`);
      this.pgReady = false;
    }
  }

  private projectToText(project: Project): string {
    return `${project.title} ${project.domain}. ${project.description}. Tech: ${project.techStack.join(', ')}. Metric: ${project.metric}`;
  }

  private fallbackSearch(query: string): Project[] {
    const q = query.toLowerCase();
    return [...PROJECTS]
      .map((project) => {
        const haystack = this.projectToText(project).toLowerCase();
        const score = q
          .split(/\s+/)
          .filter(Boolean)
          .reduce((acc, token) => acc + (haystack.includes(token) ? 1 : 0), 0);
        return { project, score };
      })
      .sort((a, b) => b.score - a.score)
      .slice(0, 3)
      .map((entry) => entry.project);
  }

  async searchProjects(query: string) {
    let matches: Project[] = [];
    if (this.pgReady && this.pool) {
      const queryEmbedding = await this.embeddings.embedQuery(query);
      const vector = `[${queryEmbedding.join(',')}]`;
      const results = await this.pool.query(
        `
        SELECT title, domain, description, tech_stack, metric
        FROM project_embeddings
        ORDER BY embedding <=> $1::vector
        LIMIT 3;
        `,
        [vector],
      );
      matches = results.rows.map((row) => ({
        title: row.title,
        domain: row.domain,
        description: row.description,
        techStack: row.tech_stack,
        metric: row.metric,
      }));
    } else {
      matches = this.fallbackSearch(query);
    }

    const explanationResult = await this.model.invoke([
      new SystemMessage(
        'You explain why projects match recruiter queries. Be concise, 2-4 bullets, specific to skills, architecture, and measurable impact.',
      ),
      new HumanMessage(`Query: ${query}\n\nProjects:\n${JSON.stringify(matches, null, 2)}`),
    ]);

    return {
      query,
      matches,
      explanation: String(explanationResult.content),
    };
  }
}
