import { UserLike } from 'src/user-like/user-like.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity('tracks')
export class Tracks {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text', nullable: true })
  track_name: string;

  @Column({ type: 'text', nullable: true })
  track_id: string;

  @Column({ type: 'text', nullable: true })
  artist: string;

  @Column({ type: 'text', nullable: true })
  artist_code: string;

  @Column({ type: 'text', nullable: true })
  release_date: string;

  @Column({ type: 'int', nullable: true })
  popularity: number;

  @Column({ type: 'text', nullable: true })
  album: string;

  @Column({ type: 'text', nullable: true })
  album_code: string;

  @Column({ type: 'text', nullable: true })
  image: string;

  @Column({ type: 'double precision', nullable: true })
  tempo: number;

  @Column({ type: 'double precision', nullable: true })
  energy: number;

  @Column({ type: 'double precision', nullable: true })
  danceability: number;

  @Column({ type: 'double precision', nullable: true })
  average_loudness: number;

  @Column({ type: 'double precision', nullable: true })
  spectral_complexity: number;

  @Column({ type: 'text', nullable: true })
  key: string;

  @Column({ type: 'text', nullable: true })
  scale: string;

  @Column({ type: 'text', nullable: true })
  valence: string;

  @Column({ type: 'double precision', nullable: true })
  acousticness: number;

  @Column({ type: 'text', nullable: true })
  video_id: string;

  @OneToMany(() => UserLike, (like) => like.track)
   likes: UserLike[];
}
