import { PostRepository } from '@/repositories/typeorm/post.repository';
import { FindOnePostUseCase } from '../find-one-post';

export function makeFindOnePostUseCase() {
  const repository = new PostRepository();
  const findPostUseCase = new FindOnePostUseCase(repository);

  return findPostUseCase;
}
