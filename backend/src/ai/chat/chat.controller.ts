import { Body, Controller, Post, Res } from '@nestjs/common';
import type { Response } from 'express';
import { ChatService } from './chat.service';

@Controller('ai')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Post('chat')
  async chat(@Body('message') message: string, @Res() res: Response) {
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    if (!message) {
      res.write(`data: ${JSON.stringify({ error: 'Message is required' })}\n\n`);
      res.end();
      return;
    }

    try {
      await this.chatService.streamChat(message, (token) => {
        res.write(`data: ${JSON.stringify({ token })}\n\n`);
      });
      res.write(`data: ${JSON.stringify({ done: true })}\n\n`);
    } catch (error) {
      const errMessage = error instanceof Error ? error.message : 'Unexpected chat error';
      res.write(`data: ${JSON.stringify({ error: errMessage })}\n\n`);
    } finally {
      res.end();
    }
  }
}
