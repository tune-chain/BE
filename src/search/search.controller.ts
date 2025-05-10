import {Controller, Get, Query} from '@nestjs/common';
import { ApiOkResponse, ApiOperation } from '@nestjs/swagger';
import { SearchService } from './search.service';
import { SearchMusicBodyDto } from './dtos/search-music-body.dto';

@Controller('search')
export class SearchController {

  constructor(private readonly searchService: SearchService) {}

  @ApiOperation({
    summary: '음악 검색하기',
    description: '음악 검색하기 ',
  })
  @ApiOkResponse({
    description: '성공 ',
  })
  @Get('/')
  async searchMusic(
    @Query() searchDto : SearchMusicBodyDto,){
        const result = await this.searchService.searchMusic(searchDto);
        return result;
    }
}