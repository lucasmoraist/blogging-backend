import { ITeacher } from '@/entities/model/teacher.interface';

export interface ITeacherRepository {
  create(teacher: ITeacher): Promise<ITeacher>;
  findById(id: string): Promise<ITeacher | null>;
  findByIdWithRelations(id: string): Promise<ITeacher | null>;
}
