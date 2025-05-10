import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { AudioService } from './audio.service';
import { AudioController } from './audio.controller';

@Module({
    imports : [HttpModule],
    controllers : [AudioController],
    providers: [AudioService],
})
export class AudioModule{}