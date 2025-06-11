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
  } from 'typeorm';

@Entity('playlists')
export class Playlists extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255})
  name : string;

  @Column({ type: 'varchar', length: 255})
  image : string;

  @ManyToOne(() => User, (user) => user.playlists)
  user: User;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date; 

  @DeleteDateColumn({ name: 'deleted_at', nullable: true })
  deletedAt: Date;
}