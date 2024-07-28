import { registerBodySchemaPost } from '@/entities/dto/register-body-schema-post.dto';
import { registerParamsSchemaTeacher } from '@/entities/dto/register-params-schema-teacher.dto';
import { makeCreatePostUseCase } from '@/use-cases/factory/make-create-post-use-case';
import { makeFindTeacherUseCase } from '@/use-cases/factory/make-find-teacher-use-case';
import { FastifyReply, FastifyRequest } from 'fastify';

export async function create(req: FastifyRequest, res: FastifyReply) {
  const { teacherId } = registerParamsSchemaTeacher.parse(req.params);

  const findTeacherUseCase = makeFindTeacherUseCase();
  const teacher = await findTeacherUseCase.execute(teacherId);

  if (!teacher) return res.status(404).send({ error: 'Teacher not found' });

  const { title, content } = registerBodySchemaPost.parse(req.body);

  const createPostUseCase = makeCreatePostUseCase();

  const post = await createPostUseCase.execute({
    title,
    content,
    teacher,
  });

  return res.status(201).send(post);
}
