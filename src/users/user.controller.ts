import {Controller, Get} from '@nestjs/common';
import { ApiOkResponse, ApiOperation } from '@nestjs/swagger';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

  constructor(private readonly userService : UserService) {}

  @ApiOperation({
    summary: 'create user',
    description: 'create user and address',
  })
  @ApiOkResponse({
    description: 'success',
  })
  @Get('/create')
  async createUser(walletAddress:string){
    const result = await this.userService.findOrCreateUser(walletAddress);
    return result;
  }
}