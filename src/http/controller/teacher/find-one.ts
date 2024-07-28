import { registerParamsSchemaTeacher } from '@/entities/dto/register-params-schema-teacher.dto';
import { makeFindTeacherWithPostUseCase } from '@/use-cases/factory/make-find-teacher-with-post-use-case';
import { FastifyReply, FastifyRequest } from 'fastify';

export async function findTeacher(req: FastifyRequest, res: FastifyReply) {
  const { teacherId } = registerParamsSchemaTeacher.parse(req.params);

  const findTeacherUseCase = makeFindTeacherWithPostUseCase();
  const teacher = await findTeacherUseCase.execute(teacherId);

  return res.status(200).send(teacher);
}
