import { registerQuerySchemaKeyword } from '@/entities/dto/register-query-schema-keyword.dto';
import { makeFindPostByKeywordUseCase } from '@/use-cases/factory/make-find-post-by-keyword-use-case';
import { FastifyReply, FastifyRequest } from 'fastify';

export async function findKeyword(req: FastifyRequest, res: FastifyReply) {
  const { keyword } = registerQuerySchemaKeyword.parse(req.query);

  const findPostByKeyword = makeFindPostByKeywordUseCase();
  const post = await findPostByKeyword.execute(keyword);

  return res.status(200).send(post);
}
