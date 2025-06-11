import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { UserLikeService } from './user-like.service';
import { UserLikeRepository } from './user-like.repository';
import { UserLikeController } from './user-like.controller';
import { UserRepository } from 'src/users/user.repository';
import { TrackRepository } from 'src/tracks/track.repository';


@Module({
    imports : [HttpModule],
    controllers : [UserLikeController],
    providers: [UserLikeService,
                UserLikeRepository,
                UserRepository,
                TrackRepository],
})
export class UserLikeModule{}