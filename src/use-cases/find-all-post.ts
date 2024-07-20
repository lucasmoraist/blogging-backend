import { IPost } from '@/entities/model/post.interface';
import { IPostRepository } from '@/repositories/post.repository.interface';

export class FindAllPostUseCase {
  constructor(private repository: IPostRepository) {}

  async execute(page: number, limit: number): Promise<IPost[]> {
    return this.repository.findAll(page, limit);
  }
}
