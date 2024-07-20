import { makeDeletePostUseCase } from '@/use-cases/factory/make-delete-post-use-case';
import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';

export async function deletePost(req: FastifyRequest, res: FastifyReply) {
  const registerParamsSchema = z.object({
    id: z.string(),
  });

  const { id } = registerParamsSchema.parse(req.params);

  const deletePostUseCase = makeDeletePostUseCase();
  await deletePostUseCase.execute(id);

  return res.status(204).send();
}
