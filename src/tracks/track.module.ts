import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { TrackRepository } from './track.repository';



@Module({
    imports : [HttpModule],
    providers: [TrackRepository],
})
export class TrackModule{}