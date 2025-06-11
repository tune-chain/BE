import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { Playlists } from "./playlists.entity";

@Injectable()
export class PlaylistsRepository extends Repository<Playlists>{
    constructor(dataSource: DataSource) {
        super(Playlists, dataSource.createEntityManager());
    }
}