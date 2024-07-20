import { makeFindOnePostUseCase } from '@/use-cases/factory/make-find-post-use-case';
import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';

export async function findOne(req: FastifyRequest, res: FastifyReply) {
  const registerParamsSchema = z.object({
    id: z.string(),
  });

  const { id } = registerParamsSchema.parse(req.params);

  const findOnePostUseCase = makeFindOnePostUseCase();
  const post = await findOnePostUseCase.execute(id);

  return res.status(200).send(post);
}
