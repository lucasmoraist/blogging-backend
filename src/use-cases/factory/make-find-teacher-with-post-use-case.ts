import { TeacherRepository } from '@/repositories/typeorm/teacher.repository';
import { FindTeacherWithRelationsUseCase } from '../find-one-teacher-with-post';

export function makeFindTeacherWithPostUseCase() {
  const repository = new TeacherRepository();
  const findTeacherUseCase = new FindTeacherWithRelationsUseCase(repository);
  return findTeacherUseCase;
}
