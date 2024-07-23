import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IUser } from './model/user.interface';

@Entity({ name: 'users' })
export class User implements IUser {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id?: string | undefined;
  @Column({ name: 'name', type: 'varchar' })
  name: string;
  @Column({ name: 'email', type: 'varchar' })
  email: string;
  @Column({ name: 'password', type: 'varchar' })
  password: string;
}
