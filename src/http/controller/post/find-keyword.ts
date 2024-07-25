import { makeFindPostByKeywordUseCase } from '@/use-cases/factory/make-find-post-by-keyword-use-case';
import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';

export async function findKeyword(req: FastifyRequest, res: FastifyReply) {
  const registerQuerySchema = z.object({
    keyword: z.string(),
  });

  const { keyword } = registerQuerySchema.parse(req.query);

  const findPostByKeyword = makeFindPostByKeywordUseCase();
  const post = await findPostByKeyword.execute(keyword);

  return res.status(200).send(post);
}
