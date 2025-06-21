import { Injectable } from "@nestjs/common";
import { DataSource, MoreThan, Repository } from "typeorm";
import { Playlists } from "./playlists.entity";

@Injectable()
export class PlaylistsRepository extends Repository<Playlists>{
    constructor(dataSource: DataSource) {
        super(Playlists, dataSource.createEntityManager());
    }
  async findWithCursor(cursor?: number, limit = 10): Promise<Playlists[]> {
    const where = cursor ? { id: MoreThan(cursor) } : {};

    return await this.find({
      where,
      order: { id: 'ASC' },
      take: limit + 1, 
      relations: ['user', 'playlistTracks'],
    });
  }

}