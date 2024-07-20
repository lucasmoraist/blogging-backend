import { makeFindAllPostUseCase } from '@/use-cases/factory/make-find-all-post-use-case';
import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';

export async function findAll(req: FastifyRequest, res: FastifyReply) {
  const registerQuerySchema = z.object({
    page: z.coerce.number().default(1),
    limit: z.coerce.number().default(10),
  });

  const { page, limit } = registerQuerySchema.parse(req.query);

  const findAllPostsUseCase = makeFindAllPostUseCase();
  const posts = await findAllPostsUseCase.execute(page, limit);

  return res.status(200).send(posts);
}
