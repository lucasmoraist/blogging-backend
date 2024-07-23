import { IUser } from '@/entities/model/user.interface';

export interface IUserRepository {
  create(user: IUser): Promise<IUser | null>;
  login(email: string): Promise<IUser>;
}
