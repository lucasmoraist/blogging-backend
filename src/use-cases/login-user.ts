import { IUser } from '@/entities/model/user.interface';
import { IUserRepository } from '@/repositories/user.repository.interface';

export class LoginUserUseCase {
  constructor(private repository: IUserRepository) {}

  async execute(email: string): Promise<IUser> {
    return this.repository.login(email);
  }
}
