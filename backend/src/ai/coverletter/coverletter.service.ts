import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HumanMessage, SystemMessage } from '@langchain/core/messages';
import { ChatOpenAI } from '@langchain/openai';
import { PROFILE_CONTEXT } from '../../data/profile.data';

@Injectable()
export class CoverLetterService {
  private readonly model: ChatOpenAI;

  constructor(configService: ConfigService) {
    const apiKey = configService.get<string>('OPENAI_API_KEY');
    const baseURL = configService.get<string>('OPENAI_BASE_URL');
    const model = configService.get<string>('OPENAI_MODEL') ?? 'gpt-4o';
    const siteUrl = configService.get<string>('OPENROUTER_SITE_URL');
    const siteName = configService.get<string>('OPENROUTER_SITE_NAME');

    this.model = new ChatOpenAI({
      apiKey,
      model,
      temperature: 0.3,
      streaming: true,
      configuration: {
        baseURL,
        defaultHeaders: {
          ...(siteUrl ? { 'HTTP-Referer': siteUrl } : {}),
          ...(siteName ? { 'X-Title': siteName } : {}),
        },
      },
    });
  }

  private extractToken(content: unknown): string {
    if (typeof content === 'string') {
      return content;
    }
    if (Array.isArray(content)) {
      return content
        .map((part) => (typeof part === 'object' && part && 'text' in part ? String(part.text ?? '') : ''))
        .join('');
    }
    return '';
  }

  async streamLetter(jobDescription: string, onToken: (token: string) => void) {
    const stream = await this.model.stream([
      new SystemMessage(
        `Use Arti Borad's resume below and the job description to write a compelling first-person cover letter. Max 300 words. Professional tone. Highlight the most relevant metrics and impact.\n\n${PROFILE_CONTEXT}`,
      ),
      new HumanMessage(`Job Description:\n${jobDescription}`),
    ]);

    for await (const chunk of stream) {
      const token = this.extractToken(chunk.content);
      if (token) {
        onToken(token);
      }
    }
  }
}
