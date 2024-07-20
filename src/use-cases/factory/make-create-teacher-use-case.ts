import { TeacherRepository } from '@/repositories/typeorm/teacher.repository';
import { CreateTeacherUseCase } from '../create-teacher';

export function makeCreateTeacherUseCase() {
  const repository = new TeacherRepository();
  const createTeacherUseCase = new CreateTeacherUseCase(repository);

  return createTeacherUseCase;
}
