import { Module } from '@nestjs/common';
import { ChatModule } from './chat/chat.module';
import { SearchModule } from './search/search.module';
import { CoverLetterModule } from './coverletter/coverletter.module';

@Module({
  imports: [ChatModule, SearchModule, CoverLetterModule],
})
export class AiModule {}
