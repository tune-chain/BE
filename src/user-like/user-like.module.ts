import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { UserLikeService } from './user-like.service';
import { UserLikeRepository } from './user-like.repository';
import { UserLikeController } from './user-like.controller';


@Module({
    imports : [HttpModule],
    controllers : [UserLikeController],
    providers: [UserLikeService,UserLikeRepository],
})
export class UserLikeModule{}