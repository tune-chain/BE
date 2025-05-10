import { Injectable } from '@nestjs/common';
import axios from 'axios';
import {errResponse } from '../response/response';
import { BaseResponse } from '../response/response.status';
import { SearchMusicBodyDto } from './dtos/search-music-body.dto';


@Injectable()
export class SearchService{
     async searchMusic(searchDto:SearchMusicBodyDto) {   
        const { artist, title } = searchDto;
        try {
            const keyword = `${artist ?? ''} ${title ?? ''} audio`.trim();
            const response = await axios.get(`https://www.youtube.com/results?search_query=${encodeURIComponent(keyword)}`);
            const videoId = response.data.split('{"videoRenderer":{"videoId":"')[1]?.split('"')[0];
            if (!videoId) {
                return errResponse(BaseResponse.MUSIC_NOT_FOUND);
            }
            return { videoId };
        }catch (error) {
          console.error(error);
          return errResponse(BaseResponse.MUSIC_NOT_FOUND);
        }
    }
}