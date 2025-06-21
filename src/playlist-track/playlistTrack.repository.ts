import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { PlaylistTrack } from "./playlistTrack.entity";

@Injectable()
export class PlaylistTrackRepository extends Repository<PlaylistTrack>{
    constructor(dataSource: DataSource) {
        super(PlaylistTrack, dataSource.createEntityManager());
    }
}