import { PostRepository } from '@/repositories/typeorm/post.repository';
import { FindAllPostUseCase } from '../find-all-post';

export function makeFindAllPostUseCase() {
  const repository = new PostRepository();
  const findAllPostUseCase = new FindAllPostUseCase(repository);

  return findAllPostUseCase;
}
