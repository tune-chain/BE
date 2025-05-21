import {Controller, Get, Param, Query} from '@nestjs/common';
import { ApiOkResponse, ApiOperation } from '@nestjs/swagger';
import { SearchService } from './search.service';
import { SearchRequestDto } from './dtos/search-request-dto';
import { SearchResponseDto } from './dtos/search-response.dto';
import { CursorPageOptionsDto } from 'src/common/cursor/cursor-page-options.dto';
import { SpotifyService } from 'src/utils/spotify/spotify.service';
import { AudioIdRequestDto } from 'src/search/dtos/audio-id-request.dto';

@Controller('search')
export class SearchController {
    constructor(
        private readonly searchService: SearchService
    ) {}
    @Get()
    @ApiOperation({summary: '음악 검색하기',description: '음악 검색하기 '})
    @ApiOkResponse({description: '성공'})
    async search(@Query() searchRequestDto: SearchRequestDto): Promise<SearchResponseDto>{
        const result = await this.searchService.search(searchRequestDto);
        return result;
    }

    @ApiOperation({
        summary: 'video id',
        description: 'get video id by artist and title',
    })
    @ApiOkResponse({
        description: '성공 ',
    })
    @Get('/audio-id')
    async getAudioId(
    @Query() audioIdRequestDto : AudioIdRequestDto){
            const result = await this.searchService.getAudioId(audioIdRequestDto);
            return result;
        }

}