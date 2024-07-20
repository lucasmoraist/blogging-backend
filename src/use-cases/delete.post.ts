import { IPostRepository } from '@/repositories/post.repository.interface';

export class DeletePostUseCase {
  constructor(private repository: IPostRepository) {}

  async execute(id: string) {
    const post = await this.repository.findById(id);
    if (!post) throw new Error('Post not found');
    return this.repository.delete(id);
  }
}
