import { registerQuerySchemaPageable } from '@/entities/dto/register-query-schema-pageable.dto';
import { makeFindAllPostUseCase } from '@/use-cases/factory/make-find-all-post-use-case';
import { FastifyReply, FastifyRequest } from 'fastify';

export async function findAll(req: FastifyRequest, res: FastifyReply) {
  const { page, limit } = registerQuerySchemaPageable.parse(req.query);

  const findAllPostsUseCase = makeFindAllPostUseCase();
  const posts = await findAllPostsUseCase.execute(page, limit);

  return res.status(200).send(posts);
}
