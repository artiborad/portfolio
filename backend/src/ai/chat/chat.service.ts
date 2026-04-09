import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HumanMessage, SystemMessage } from '@langchain/core/messages';
import { ChatOpenAI } from '@langchain/openai';
import { BufferMemory } from '@langchain/classic/memory';
import { PROFILE_CONTEXT } from '../../data/profile.data';
import { ChatGateway } from './chat.gateway';

@Injectable()
export class ChatService {
  private readonly model: ChatOpenAI;
  private readonly memory = new BufferMemory({
    returnMessages: true,
    memoryKey: 'history',
    inputKey: 'input',
    outputKey: 'output',
  });

  constructor(
    configService: ConfigService,
    private readonly chatGateway: ChatGateway,
  ) {
    const apiKey = configService.get<string>('OPENAI_API_KEY');
    const baseURL = configService.get<string>('OPENAI_BASE_URL');
    const model = configService.get<string>('OPENAI_MODEL') ?? 'gpt-4o';
    const siteUrl = configService.get<string>('OPENROUTER_SITE_URL');
    const siteName = configService.get<string>('OPENROUTER_SITE_NAME');

    this.model = new ChatOpenAI({
      apiKey,
      model,
      temperature: 0.2,
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

  async streamChat(message: string, onToken: (token: string) => void) {
    const memoryState = await this.memory.loadMemoryVariables({});
    const history = Array.isArray(memoryState.history) ? memoryState.history : [];

    const stream = await this.model.stream([
      new SystemMessage(
        `You are Arti Borad's AI portfolio assistant. Answer only using the resume context below. If asked for details not present, say you do not have that info.\n\n${PROFILE_CONTEXT}`,
      ),
      ...history,
      new HumanMessage(message),
    ]);

    let fullResponse = '';
    for await (const chunk of stream) {
      const token = this.extractToken(chunk.content);
      if (!token) {
        continue;
      }
      fullResponse += token;
      onToken(token);
      this.chatGateway.broadcastToken(token);
    }

    await this.memory.saveContext({ input: message }, { output: fullResponse });
  }
}
