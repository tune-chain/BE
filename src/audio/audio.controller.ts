import {Controller, Get, Query} from '@nestjs/common';
import { ApiOkResponse, ApiOperation } from '@nestjs/swagger';
import { AudioService } from './audio.service';
import { SearchMusicBodyDto } from '../search/dtos/search-music-body.dto';

@Controller('audio')
export class AudioController {

  constructor(private readonly audioService: AudioService) {}

  @ApiOperation({
    summary: '음악 검색하기',
    description: '음악 검색하기 ',
  })
  @ApiOkResponse({
    description: '성공 ',
  })
  @Get('/get-audio')
  async searchMusic(
    @Query() searchDto : SearchMusicBodyDto,){
        const result = await this.audioService.getAudio(searchDto);
        return result;
    }
}