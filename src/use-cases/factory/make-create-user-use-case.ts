import { UserRepository } from '@/repositories/typeorm/user.repository';
import { CreateUserUseCase } from '../create-user';

export function makeCreateUserUseCase() {
  const repository = new UserRepository();
  const createUserUseCase = new CreateUserUseCase(repository);
  return createUserUseCase;
}
