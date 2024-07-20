import { ITeacherRepository } from '@/repositories/teacher.repository.interface';

export class FindTeacherWithRelationsUseCase {
  constructor(private repository: ITeacherRepository) {}

  async execute(id: string) {
    const teacher = await this.repository.findByIdWithRelations(id);

    if (!teacher) throw new Error('Teacher not found');

    return teacher;
  }
}
