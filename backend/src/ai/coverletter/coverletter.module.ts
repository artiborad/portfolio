import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CoverLetterController } from './coverletter.controller';
import { CoverLetterService } from './coverletter.service';

@Module({
  imports: [ConfigModule],
  controllers: [CoverLetterController],
  providers: [CoverLetterService],
})
export class CoverLetterModule {}
