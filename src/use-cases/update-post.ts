import { IPost } from '@/entities/model/post.interface';
import { IPostRepository } from '@/repositories/post.repository.interface';

export class UpdatePostUseCase {
  constructor(private repository: IPostRepository) {}

  async execute(id: string, post: IPost): Promise<IPost> {
    const isExist = await this.repository.findById(id);
    if (!isExist) throw new Error('Post not found');
    return this.repository.update(post);
  }
}
