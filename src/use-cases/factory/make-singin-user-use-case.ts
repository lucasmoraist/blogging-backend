import { UserRepository } from '@/repositories/typeorm/user.repository';
import { LoginUserUseCase } from '../login-user';

export function makeSinginUserUseCase() {
  const repository = new UserRepository();
  const loginUserUseCase = new LoginUserUseCase(repository);
  return loginUserUseCase;
}
