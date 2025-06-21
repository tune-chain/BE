import { User } from 'src/users/user.entity';
import {
    BaseEntity,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    ManyToOne,
    OneToMany,
  } from 'typeorm';
import { PlaylistTrack } from '../playlist-track/playlistTrack.entity';

@Entity('playlists')
export class Playlists extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255})
  name : string;

  @Column({ type: 'text', nullable: true })
  image: string;

  @ManyToOne(() => User, (user) => user.playlists)
  user: User;

  @OneToMany(() => PlaylistTrack, (playlistTrack) => playlistTrack.playlist, {
    cascade: true,
  })
  playlistTracks: PlaylistTrack[];

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date; 

  @DeleteDateColumn({ name: 'deleted_at', nullable: true })
  deletedAt: Date;
}