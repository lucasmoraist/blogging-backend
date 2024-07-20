import { makeFindTeacherWithPostUseCase } from '@/use-cases/factory/make-find-teacher-with-post-use-case';
import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';

export async function findTeacher(req: FastifyRequest, res: FastifyReply) {
  const registerParamsSchema = z.object({
    id: z.string(),
  });

  const { id } = registerParamsSchema.parse(req.params);

  const findTeacherUseCase = makeFindTeacherWithPostUseCase();
  const teacher = await findTeacherUseCase.execute(id);

  return res.status(200).send(teacher);
}
