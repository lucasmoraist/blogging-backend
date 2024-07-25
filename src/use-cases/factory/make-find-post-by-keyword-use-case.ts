import { PostRepository } from '@/repositories/typeorm/post.repository';
import { FindPostByKeywordUseCase } from '../find-post-by-keyword';

export function makeFindPostByKeywordUseCase() {
  const repository = new PostRepository();
  const findPostUseCase = new FindPostByKeywordUseCase(repository);
  return findPostUseCase;
}
