import { PostRepository } from '@/repositories/typeorm/post.repository';
import { DeletePostUseCase } from '../delete.post';

export function makeDeletePostUseCase() {
  const repository = new PostRepository();
  const deletePostUseCase = new DeletePostUseCase(repository);
  return deletePostUseCase;
}
