import { ITeacher } from '@/entities/model/teacher.interface';
import { ITeacherRepository } from '@/repositories/teacher.repository.interface';

export class CreateTeacherUseCase {
  constructor(private repository: ITeacherRepository) {}

  async execute(teacher: ITeacher): Promise<ITeacher> {
    return this.repository.create(teacher);
  }
}
