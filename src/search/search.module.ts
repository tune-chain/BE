import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { SearchService } from './search.service';
import { SearchController } from './search.controller';
import { SpotifyModule } from 'src/utils/spotify/spotify.module';

@Module({
    imports : [HttpModule, SpotifyModule],
    controllers : [SearchController],
    providers: [SearchService],
})
export class SearchModule{}