import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { PlaylistsController } from './playlists.controller';
import { PlaylistsService } from './playlists.service';
import { PlaylistsRepository } from './playlists.repository';


@Module({
    imports : [HttpModule],
    controllers : [PlaylistsController],
    providers: [PlaylistsService, PlaylistsRepository],
})
export class UserLikeModule{}