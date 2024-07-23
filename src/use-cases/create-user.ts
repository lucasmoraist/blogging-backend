import { IUser } from '@/entities/model/user.interface';
import { IUserRepository } from '@/repositories/user.repository.interface';

export class CreateUserUseCase {
  constructor(private repository: IUserRepository) {}

  async execute(user: IUser): Promise<IUser | null> {
    return this.repository.create(user);
  }
}
