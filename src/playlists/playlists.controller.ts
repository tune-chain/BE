import {Body, Controller, Get, Param, Post, Query} from '@nestjs/common';
import { PlaylistsService } from './playlists.service';
import { ApiOkResponse, ApiOperation } from '@nestjs/swagger';
import { CreatePlaylistsBodyDto } from './dtos/create-playlists-body.dto';
import { CursorPageOptionsDto } from 'src/common/cursor/cursor-page-options.dto';
import { PlaylistResponseDto } from './dtos/playlist-response.dto';
import { PlaylistTrackResponseDto } from './dtos/playlist-track-response.dto';

@Controller('playlists')
export class PlaylistsController {
    constructor(
        private readonly playlistsService: PlaylistsService
    ) {}

    @Post()
    @ApiOperation({summary: 'create playlist',description: 'put name and image'})
    @ApiOkResponse({description: 'success'})
    async createPlaylists(@Body() createPlaylistsBodyDto : CreatePlaylistsBodyDto){
        const result = await this.playlistsService.createPlaylist(createPlaylistsBodyDto);
        return result;
    }
    @Post(':playlistId/tracks/:trackId')
    async addTrackToPlaylist(
        @Param('playlistId') playlistId: number,
        @Param('trackId') trackId: number,
    ) {
        const result = await this.playlistsService.addTrackToPlaylist(playlistId, trackId);
        return result;
    }

    @Get()
    @ApiOperation({
        summary: 'Get playlists with cursor pagination',
        description: '커서 기반으로 플레이리스트 목록을 불러옵니다.',
    })
    @ApiOkResponse({description: 'success'})
    async getPlaylists(@Query() query: CursorPageOptionsDto): Promise<{
        data: PlaylistResponseDto[];
        nextCursor: number | null;
        hasNext: boolean;
    }>{
        const result = await this.playlistsService.getPlaylists(query);
        return result;
    }

    @Get(':playlistId/tracks')
    @ApiOperation({
        summary: 'Get playlist tracks with cursor pagination',
        description: '커서 기반으로 플레이리스트 트랙 목록을 불러옵니다.',
    })
    @ApiOkResponse({description: 'success'})
    async getTracksInPlaylist(@Param('playlistId') playlistId : number, @Query()cursorPageOptionsDto : CursorPageOptionsDto): Promise<{
        data: PlaylistTrackResponseDto[];
        nextCursor: number | null;
        hasNext: boolean;
    }>{
        const result = await this.playlistsService.getTracksInPlaylist(playlistId,cursorPageOptionsDto);
        return result;
    }

}