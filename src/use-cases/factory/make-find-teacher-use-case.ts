import { TeacherRepository } from '@/repositories/typeorm/teacher.repository';
import { FindTeacherUseCase } from '../find-one-teacher';

export function makeFindTeacherUseCase() {
  const repository = new TeacherRepository();
  const findTeacherUseCase = new FindTeacherUseCase(repository);
  return findTeacherUseCase;
}
