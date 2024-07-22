import { makeCreatePostUseCase } from '@/use-cases/factory/make-create-post-use-case';
import { makeFindTeacherUseCase } from '@/use-cases/factory/make-find-teacher-use-case';
import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';

export async function create(req: FastifyRequest, res: FastifyReply) {
  const registerParamsSchema = z.object({
    teacherId: z.string().uuid(),
  });

  const { teacherId } = registerParamsSchema.parse(req.params);

  const registerBodySchema = z.object({
    title: z.string(),
    content: z.string(),
  });

  const { title, content } = registerBodySchema.parse(req.body);

  const findTeacherUseCase = makeFindTeacherUseCase();
  const teacher = await findTeacherUseCase.execute(teacherId);

  if (!teacher) {
    return res.status(404).send({ error: 'Teacher not found' });
  }

  const createPostUseCase = makeCreatePostUseCase();

  const post = await createPostUseCase.execute({
    title,
    content,
    teacher,
  });

  return res.status(201).send(post);
}
