import { makeCreateUserUseCase } from '@/use-cases/factory/make-create-user-use-case';
import { hash } from 'bcryptjs';
import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';

export async function singup(req: FastifyRequest, res: FastifyReply) {
  const registerBodySchema = z.object({
    name: z.string(),
    email: z.string(),
    password: z.string(),
  });

  const { name, email, password } = registerBodySchema.parse(req.body);

  const hashPasword = await hash(password, 8);

  const userWithHasedPassword = { name, email, password: hashPasword };

  const createUserUseCase = makeCreateUserUseCase();

  const user = await createUserUseCase.execute(userWithHasedPassword);

  return res.status(201).send({ id: user?.id, email: user?.email });
}
