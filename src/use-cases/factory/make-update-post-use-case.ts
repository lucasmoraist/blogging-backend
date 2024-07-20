import { PostRepository } from '@/repositories/typeorm/post.repository';
import { UpdatePostUseCase } from '../update-post';

export function makeUpdatePostUseCase() {
  const repository = new PostRepository();
  const updatePostUseCase = new UpdatePostUseCase(repository);
  return updatePostUseCase;
}
