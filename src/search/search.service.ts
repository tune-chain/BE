import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { SearchRequestDto } from './dtos/search-request-dto';
import { SpotifyService } from 'src/utils/spotify/spotify.service';
import { SearchResponseDto, TrackDto, ArtistDto} from './dtos/search-response.dto';
import { ResponseCode } from 'src/response/response-code.enum';
import { AudioIdRequestDto } from './dtos/audio-id-request.dto';
import { BaseResponse } from 'src/response/response.status';
import { errResponse } from 'src/response/response';


@Injectable()
export class SearchService{
    constructor(
        private readonly spotifyService : SpotifyService,
    ) {}


     async search(searchRequestDto:SearchRequestDto) : Promise<SearchResponseDto> {   
        const {keyword,cursorId,pageSize} = searchRequestDto;
        try {
        const data = await this.spotifyService.search(keyword,cursorId,pageSize);
        const tracks : TrackDto[] = this.mapTracks(data.tracks.items);
        const artists: ArtistDto[] = this.mapArtists(data.artists.items);
        return {tracks,artists};
        }catch (error) {
            throw new Error(ResponseCode.MUSIC_NOT_FOUND);
        }
    }

    async getAudioId(audioIdRequestDto:AudioIdRequestDto) {
        const { artist, title } = audioIdRequestDto;
        try {
            const keyword = `${artist ?? ''} ${title ?? ''} audio`.trim();
            const response = await axios.get(`https://www.youtube.com/results?search_query=${encodeURIComponent(keyword)}`);
            const audioId = response.data.split('{"videoRenderer":{"videoId":"')[1]?.split('"')[0];
            if (!audioId) {
                return errResponse(BaseResponse.MUSIC_NOT_FOUND);
            }
            return { audioId };
        }catch (error) {
          console.error(error);
          return errResponse(BaseResponse.MUSIC_NOT_FOUND);
        }
    }


    private mapTracks(items) : TrackDto[]{
        return items.map((item): TrackDto => ({
            trackId: item.id,
            trackName: item.name,
            popularity: item.popularity,
            artistName: item.artists?.[0]?.name ?? '',
            artistId: item.artists?.[0]?.id ?? '',
            albumImage: item.album.images?.[0]?.url ?? '',
        }));
    }

    private mapArtists(items): ArtistDto[] {
        return items.map((item): ArtistDto => ({
            artistId: item.id,
            artistName: item.name,
            artistImage: item.images?.[0]?.url ?? '',
            popularity: item.popularity,
        }));
    }
}