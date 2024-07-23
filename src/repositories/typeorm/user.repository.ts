import { IUser } from '@/entities/model/user.interface';
import { IUserRepository } from '../user.repository.interface';
import { Repository } from 'typeorm';
import { User } from '@/entities/user.entity';
import { appDataSource } from '@/lib/typeorm/typeorm';

export class UserRepository implements IUserRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = appDataSource.getRepository(User);
  }
  async create(user: IUser): Promise<IUser | null> {
    const userExists = await this.repository.findOne({
      where: { email: user.email },
    });

    if (userExists) throw new Error('User already exists');

    return this.repository.save(user);
  }
  async login(email: string): Promise<IUser> {
    const userExists = await this.repository.findOne({
      where: { email },
    });

    if (!userExists) throw new Error('User not found');

    return userExists;
  }
}
