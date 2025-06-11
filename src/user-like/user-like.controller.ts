import {Body, Controller, Delete,  Post} from '@nestjs/common';
import { ApiOkResponse, ApiOperation } from '@nestjs/swagger';
import { UserLikeService } from './user-like.service';
import { UserLikeBodyDto } from './dtos/user-like-body.dto';

@Controller('user-like')
export class UserLikeController {
    constructor(
        private readonly userLikeService: UserLikeService
    ) {}
    @Post()
    @ApiOperation({summary: 'like track',description: 'like track'})
    @ApiOkResponse({description: 'success'})
    async likeTrack(@Body() userLikeBodyDto : UserLikeBodyDto){
        const result = await this.userLikeService.likeTrack(userLikeBodyDto);
        return result;
    }

    @Delete()
    @ApiOperation({summary: 'unlike track',description: 'unlike track'})
    @ApiOkResponse({description: 'success'})
    async unLikeTrack(@Body() userLikeBodyDto : UserLikeBodyDto){
        const result = await this.userLikeService.unLikeTrack(userLikeBodyDto);
        return result;
    }
}