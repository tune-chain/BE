import { Injectable } from "@nestjs/common";
import { PlaylistsRepository } from "./playlists.repository";
import { UserRepository } from "src/users/user.repository";
import { CreatePlaylistsBodyDto } from "./dtos/create-playlists-body.dto";
import { CursorPageOptionsDto } from "src/common/cursor/cursor-page-options.dto";
import { User } from "src/users/user.entity";
import { ResponseCode } from "src/response/response-code.enum";
import { TrackRepository } from "src/tracks/track.repository";
import { PlaylistTrackRepository } from "src/playlist-track/playlistTrack.repository";
import { Playlists } from "./playlists.entity";
import { Tracks } from "src/tracks/tracks.entity";

@Injectable()
export class PlaylistsService{
    constructor(
        private readonly playlistsRepository : PlaylistsRepository,
        private readonly userRepository : UserRepository,
        private readonly trackRepository : TrackRepository,
        private readonly playlistTrackRepository : PlaylistTrackRepository
    ) {}

    async createPlaylist(createPlaylistDto : CreatePlaylistsBodyDto) {
        const {walletAddress,name,image} = createPlaylistDto;
        const user = await this.findUserByAddress(walletAddress);
        const playlist = this.playlistsRepository.create({
            name ,
            image ,
            user,
        });
        return await this.playlistsRepository.save(playlist);
    }

    async addTrackToPlaylist(playlistId: number, trackId: number){
        const playlist = await this.findPlaylistById(playlistId);
        const track = await this.findTrackById(trackId);
        const isTrackInPlaylist = await this.isTrackInPlaylist(playlistId,trackId);
        const playlistTrack = this.playlistTrackRepository.create({
            playlist,track
        });
        return await this.playlistTrackRepository.save(playlistTrack);
    }

    async getPlaylists(cursorPageOptionsDto : CursorPageOptionsDto){
        const{cursor, limit = 10} = cursorPageOptionsDto;
        const items = await this.playlistsRepository.findWithCursor(cursor, limit);
        const hasNext = items.length > limit;

        const data = (hasNext ? items.slice(0, limit) : items).map((playlist) => ({
            id: playlist.id,
            name: playlist.name,
            image: playlist.image,
            userId: playlist.user.id,
        }));

        const nextCursor = hasNext ? data[data.length - 1].id : null;

        return {
            data,
            nextCursor,
            hasNext,
        };
        
    }

    private async findUserByAddress (walletAddress : string): Promise<User> {
        const user = await this.userRepository.findOne({where:{walletAddress}});
        if (!user) {
            throw new Error(ResponseCode.USER_NOT_FOUND);
        }
        return user;
    }

    private async findPlaylistById(playlistId : number) : Promise<Playlists> {
        const playlist = await this.playlistsRepository.findOne({
        where: { id: playlistId },
        });
        if(!playlist){
            throw new Error(ResponseCode.PLAYLIST_NOT_FOUND);
        }
        return playlist;
    }

    private async findTrackById(trackId : number) : Promise<Tracks>{
        const track = await this.trackRepository.findOne({ where: { id: trackId } });
        if(!track){
            throw new Error(ResponseCode.MUSIC_NOT_FOUND);
        }
        return track;
    }

    private async isTrackInPlaylist(playlistId : number, trackId : number) {
        const isTrackExist = await this.playlistTrackRepository.findOne({
            where : {
                playlist : {id : playlistId},
                track : {id : trackId},
            },
            relations : ['playlist','track']
        });
        if(isTrackExist){
            throw new Error(ResponseCode.TRACK_ALREADY_EXIST)
        }
    }
}
