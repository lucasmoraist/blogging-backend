import { makeCreateTeacherUseCase } from '@/use-cases/factory/make-create-teacher-use-case';
import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';

export async function create(req: FastifyRequest, res: FastifyReply) {
  const registerBodySchema = z.object({
    name: z.string(),
    class: z.string(),
  });

  const { name, class: string } = registerBodySchema.parse(req.body);

  const createTeacherUseCase = makeCreateTeacherUseCase();

  const teacher = await createTeacherUseCase.execute({
    name,
    class: string,
  });

  return res.status(201).send(teacher);
}
