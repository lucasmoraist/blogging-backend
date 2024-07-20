import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { IPost } from './model/post.interface';
import { Teacher } from './teacher.entity';
import { ITeacher } from './model/teacher.interface';

@Entity({
  name: 'post',
})
export class Post implements IPost {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id?: string | undefined;
  @Column({ name: 'title', type: 'varchar' })
  title: string;
  @Column({ name: 'content', type: 'text' })
  content: string;
  @Column({
    name: 'created_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt?: Date;

  @ManyToOne(() => Teacher, (teacer) => teacer.posts)
  @JoinColumn({ name: 'teacher_id' })
  teacher?: ITeacher;
}
