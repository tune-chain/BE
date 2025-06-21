import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  Column,
} from 'typeorm';
import { Playlists } from '../playlists/playlists.entity';
import { Tracks } from 'src/tracks/tracks.entity';

@Entity('playlist-track')
export class PlaylistTrack {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Playlists, (playlist) => playlist.playlistTracks, {
    onDelete: 'CASCADE',
  })
  playlist: Playlists;

  @ManyToOne(() => Tracks, { eager: true, onDelete: 'CASCADE' })
  track: Tracks;
}
