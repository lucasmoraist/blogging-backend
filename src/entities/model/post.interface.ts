import { ITeacher } from './teacher.interface';

export interface IPost {
  id?: string;
  title: string;
  content: string;
  teacher?: ITeacher;
  createdAt?: Date;
}
