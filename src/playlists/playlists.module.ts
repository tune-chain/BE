import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { PlaylistsController } from './playlists.controller';
import { PlaylistsService } from './playlists.service';
import { PlaylistsRepository } from './playlists.repository';
import { UserRepository } from 'src/users/user.repository';
import { TrackRepository } from 'src/tracks/track.repository';


@Module({
    imports : [HttpModule],
    controllers : [PlaylistsController],
    providers: [PlaylistsService, 
                PlaylistsRepository,
                PlaylistsRepository,
                UserRepository,
                TrackRepository],
})
export class PlaylistsModule{}