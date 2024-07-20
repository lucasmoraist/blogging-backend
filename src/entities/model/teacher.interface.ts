import { IPost } from './post.interface';

export interface ITeacher {
  id?: string;
  name: string;
  class: string;
  posts?: IPost[];
}
