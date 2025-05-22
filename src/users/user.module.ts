import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserRepository } from './user.repository';


@Module({
    imports : [HttpModule],
    controllers : [UserController],
    providers: [UserService,UserRepository],
})
export class WordModule{}