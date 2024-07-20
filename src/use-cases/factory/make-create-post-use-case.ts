import { PostRepository } from '@/repositories/typeorm/post.repository';
import { CreatePostUseCase } from '../create-post';

export function makeCreatePostUseCase() {
  const repository = new PostRepository();
  const createPostUseCase = new CreatePostUseCase(repository);

  return createPostUseCase;
}
