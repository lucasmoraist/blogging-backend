import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ITeacher } from './model/teacher.interface';
import { Post } from './post.entity';
import { IPost } from './model/post.interface';

@Entity({
  name: 'teacher',
})
export class Teacher implements ITeacher {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id?: string | undefined;
  @Column({ name: 'name', type: 'varchar' })
  name: string;
  @Column({ name: 'class', type: 'varchar' })
  class: string;

  @OneToMany(() => Post, (post) => post.teacher)
  posts?: IPost[] | undefined;
}
