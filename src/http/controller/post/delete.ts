import { registerParamsSchemaPost } from '@/entities/dto/register-params-schema-post.dto';
import { makeDeletePostUseCase } from '@/use-cases/factory/make-delete-post-use-case';
import { FastifyReply, FastifyRequest } from 'fastify';

export async function deletePost(req: FastifyRequest, res: FastifyReply) {
  const { idPost } = registerParamsSchemaPost.parse(req.params);

  const deletePostUseCase = makeDeletePostUseCase();
  await deletePostUseCase.execute(idPost);

  return res.status(204).send();
}
