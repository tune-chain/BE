import { Injectable } from "@nestjs/common";
import { DataSource, MoreThan, Repository } from "typeorm";
import { PlaylistTrack } from "./playlistTrack.entity";

@Injectable()
export class PlaylistTrackRepository extends Repository<PlaylistTrack>{
    constructor(dataSource: DataSource) {
        super(PlaylistTrack, dataSource.createEntityManager());
    }

    async findTracksInPlaylistWithCursor(
        playlistId: number,
        cursor?: number,
        limit: number = 10,
    ): Promise<PlaylistTrack[]> {
        const where: any = {
        playlist: { id: playlistId },
    };
    if (cursor) {
        where.id = MoreThan(cursor); // PlaylistTrack.id 기준으로 커서 페이징
    }

    return await this.find({
        where,
        order: { id: 'ASC' },
        take: limit + 1,
        relations: ['track'],
    });
  }
}