import { IPost } from '@/entities/model/post.interface';
import { IPostRepository } from '@/repositories/post.repository.interface';

export class FindOnePostUseCase {
  constructor(private repository: IPostRepository) {}

  async execute(id: string): Promise<IPost> {
    const post = await this.repository.findById(id);

    if (!post) throw new Error('Post not found');

    return post;
  }
}
