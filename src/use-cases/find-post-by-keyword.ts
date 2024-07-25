import { IPost } from '@/entities/model/post.interface';
import { IPostRepository } from '@/repositories/post.repository.interface';

export class FindPostByKeywordUseCase {
  constructor(private repository: IPostRepository) {}

  async execute(keyword: string): Promise<IPost> {
    const post = await this.repository.findByKeyword(keyword);

    if (!post) throw new Error('Post not found');

    return post;
  }
}
