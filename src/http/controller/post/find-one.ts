import { registerParamsSchemaPost } from '@/entities/dto/register-params-schema-post.dto';
import { makeFindOnePostUseCase } from '@/use-cases/factory/make-find-post-use-case';
import { FastifyReply, FastifyRequest } from 'fastify';

export async function findOne(req: FastifyRequest, res: FastifyReply) {
  const { idPost } = registerParamsSchemaPost.parse(req.params);

  const findOnePostUseCase = makeFindOnePostUseCase();
  const post = await findOnePostUseCase.execute(idPost);

  return res.status(200).send(post);
}
