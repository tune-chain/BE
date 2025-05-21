import { Module } from '@nestjs/common';
import { ConfigModule} from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RedisModule } from './utils/redis/redis.module';
import { SearchModule } from './search/search.module';
import { SpotifyModule } from './utils/spotify/spotify.module';
import { DeezerModule } from './utils/deezer/deezer.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT, 10),
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        //entities: 
        synchronize: process.env.DB_SYNC === 'true',
    }),
    RedisModule,
    SpotifyModule,
    DeezerModule,
    SearchModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
