import { Tracks } from "src/tracks/tracks.entity";
import { User } from "src/users/user.entity";
import { CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity()
@Unique(['user', 'track']) 
export class UserLike {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.likedTracks, { onDelete: 'CASCADE', eager: true })
  user: User;

  @ManyToOne(() => Tracks, (track) => track.likes, { onDelete: 'CASCADE', eager: true })
  track: Tracks;

  @CreateDateColumn()
  likedAt: Date;
}