import { registerBodySchemaTeacher } from '@/entities/dto/register-body-schema-teacher.dto';
import { makeCreateTeacherUseCase } from '@/use-cases/factory/make-create-teacher-use-case';
import { FastifyReply, FastifyRequest } from 'fastify';

export async function create(req: FastifyRequest, res: FastifyReply) {
  const { name, class: string } = registerBodySchemaTeacher.parse(req.body);

  const createTeacherUseCase = makeCreateTeacherUseCase();

  const teacher = await createTeacherUseCase.execute({
    name,
    class: string,
  });

  return res.status(201).send(teacher);
}
