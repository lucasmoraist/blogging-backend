import { IPost } from '@/entities/model/post.interface';
import { IPostRepository } from '@/repositories/post.repository.interface';

export class CreatePostUseCase {
  constructor(private repository: IPostRepository) {}

  async execute(post: IPost): Promise<IPost> {
    return this.repository.create(post);
  }
}
