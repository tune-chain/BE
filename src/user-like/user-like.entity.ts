import { Tracks } from "src/tracks/tracks.entity";
import { User } from "src/users/user.entity";
import { CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity()
@Unique(['user', 'track']) // 동일한 사용자-트랙 조합 중복 방지
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