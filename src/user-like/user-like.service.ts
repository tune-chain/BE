import { Injectable } from '@nestjs/common';
import { UserLikeRepository } from './user-like.repository';
import { UserRepository } from 'src/users/user.repository';
import { TrackRepository } from 'src/tracks/track.repository';
import { UserLikeBodyDto } from './dtos/user-like-body.dto';
import { errResponse } from 'src/response/response';
import { BaseResponse } from 'src/response/response.status';
import { DeepPartial } from 'typeorm';
import { UserLike } from './user-like.entity';

@Injectable()
export class UserLikeService{
    constructor(
        private readonly userLikeRepository : UserLikeRepository,
        private readonly userRepository : UserRepository,
        private readonly trackRepository : TrackRepository
    ) {}

    async likeTrack(userLikeBodyDto : UserLikeBodyDto){
        const {userId, trackId} = userLikeBodyDto;
        try{
            const user = await this.findUserById(userId);
            const track = await this.findTrackById(trackId);
            const userLike = await this.findUserLike(user,track);
            if(userLike){
                return errResponse(BaseResponse.TRACK_ALREADY_LIKED);
            }
            const like = await this.userLikeRepository.create({user,track} as DeepPartial<UserLike>);
            await this.userLikeRepository.save(like);
            return BaseResponse.LIKE_TRACK_SUCCESS;
        }catch (error) {
          console.error(error);
          return errResponse(BaseResponse.TRACK_LIKE_FAILED);
        }
    }

    async unLikeTrack(userLikeBodyDto : UserLikeBodyDto){
        const {userId, trackId} = userLikeBodyDto;
        try{
            const user = await this.findUserById(userId);
            const track = await this.findTrackById(trackId);
            const userLike = await this.findUserLike(user,track);
            if(!userLike){
                return errResponse(BaseResponse.USER_LIKE_NOT_FOUND);
            }
            await this.userLikeRepository.remove(userLike);
            return BaseResponse.UNLIKE_TRACK_SUCCESS;
        }catch (error) {
          console.error(error);
          return errResponse(BaseResponse.TRACK_UNLIKE_FAILED);
        }
    }

    private async findUserById (userId:number){
        const user = await this.userRepository.findOne({where:{id:userId}});
        if (!user) {
            return errResponse(BaseResponse.USER_NOT_FOUND);
        }
        return user;
    }

    private async findTrackById (trackId:number){
        const track = await this.trackRepository.findOne({where:{id:trackId}});
        if (!track) {
            return errResponse(BaseResponse.MUSIC_NOT_FOUND);
        }
        return track;
    }
    private async findUserLike (user, track){
        const userLike = await this.userLikeRepository.findOne({where: { user, track }});
        return userLike;
    }
}
