import { registerBodySchemaPost } from '@/entities/dto/register-body-schema-post.dto';
import { registerParamsSchemaPost } from '@/entities/dto/register-params-schema-post.dto';
import { makeUpdatePostUseCase } from '@/use-cases/factory/make-update-post-use-case';
import { FastifyReply, FastifyRequest } from 'fastify';

export async function update(req: FastifyRequest, res: FastifyReply) {
  const { idPost } = registerParamsSchemaPost.parse(req.params);

  const { title, content } = registerBodySchemaPost.parse(req.body);

  const updatePostUseCase = makeUpdatePostUseCase();

  const post = await updatePostUseCase.execute(idPost, {
    id: idPost,
    title,
    content,
  });

  return res.status(200).send(post);
}
