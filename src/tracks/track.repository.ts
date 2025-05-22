import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { Tracks } from "./tracks.entity";

@Injectable()
export class TrackRepository extends Repository<Tracks>{
    constructor(dataSource: DataSource) {
        super(Tracks, dataSource.createEntityManager());
    }
}