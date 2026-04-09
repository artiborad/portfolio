import { Body, Controller, Post, Res } from '@nestjs/common';
import type { Response } from 'express';
import { CoverLetterService } from './coverletter.service';

@Controller('ai')
export class CoverLetterController {
  constructor(private readonly coverLetterService: CoverLetterService) {}

  @Post('coverletter')
  async coverLetter(@Body('jobDescription') jobDescription: string, @Res() res: Response) {
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    if (!jobDescription) {
      res.write(`data: ${JSON.stringify({ error: 'Job description is required' })}\n\n`);
      res.end();
      return;
    }

    try {
      await this.coverLetterService.streamLetter(jobDescription, (token) => {
        res.write(`data: ${JSON.stringify({ token })}\n\n`);
      });
      res.write(`data: ${JSON.stringify({ done: true })}\n\n`);
    } catch (error) {
      const errMessage = error instanceof Error ? error.message : 'Unexpected cover letter error';
      res.write(`data: ${JSON.stringify({ error: errMessage })}\n\n`);
    } finally {
      res.end();
    }
  }
}
