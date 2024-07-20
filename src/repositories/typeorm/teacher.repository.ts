import { ITeacher } from '@/entities/model/teacher.interface';
import { ITeacherRepository } from '../teacher.repository.interface';
import { Repository } from 'typeorm';
import { Teacher } from '@/entities/teacher.entity';
import { appDataSource } from '@/lib/typeorm/typeorm';

export class TeacherRepository implements ITeacherRepository {
  private repository: Repository<Teacher>;

  constructor() {
    this.repository = appDataSource.getRepository(Teacher);
  }
  async findById(id: string): Promise<ITeacher | null> {
    return this.repository.findOne({
      where: {
        id,
      },
    });
  }

  async findByIdWithRelations(id: string): Promise<ITeacher | null> {
    return this.repository.findOne({
      relations: ['posts'],
      where: {
        id,
      },
    });
  }

  create(teacher: ITeacher): Promise<ITeacher> {
    return this.repository.save(teacher);
  }
}
