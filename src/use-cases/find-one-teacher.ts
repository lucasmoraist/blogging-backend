import { ITeacherRepository } from '@/repositories/teacher.repository.interface';

export class FindTeacherUseCase {
  constructor(private repository: ITeacherRepository) {}

  async execute(id: string) {
    const teacher = await this.repository.findById(id);

    if (!teacher) throw new Error('Teacher not found');

    return teacher;
  }
}
