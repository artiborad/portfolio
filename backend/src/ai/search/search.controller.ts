import { Body, Controller, Post } from '@nestjs/common';
import { SearchService } from './search.service';

@Controller('ai')
export class SearchController {
  constructor(private readonly searchService: SearchService) {}

  @Post('search')
  search(@Body('query') query: string) {
    return this.searchService.searchProjects(query);
  }
}
