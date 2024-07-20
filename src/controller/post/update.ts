import { makeUpdatePostUseCase } from '@/use-cases/factory/make-update-post-use-case';
import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';

export async function update(req: FastifyRequest, res: FastifyReply) {
  const registerParamsSchema = z.object({
    id: z.string(),
  });

  const { id } = registerParamsSchema.parse(req.params);

  const registerBodySchema = z.object({
    title: z.string(),
    content: z.string(),
  });

  const { title, content } = registerBodySchema.parse(req.body);

  const updatePostUseCase = makeUpdatePostUseCase();

  const post = await updatePostUseCase.execute(id, {
    id,
    title,
    content,
  });

  return res.status(200).send(post);
}
