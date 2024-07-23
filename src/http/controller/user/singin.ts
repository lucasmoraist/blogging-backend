import { makeSinginUserUseCase } from '@/use-cases/factory/make-singin-user-use-case';
import { compare } from 'bcryptjs';
import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';

export async function singin(req: FastifyRequest, res: FastifyReply) {
  const registerBodySchema = z.object({
    email: z.string(),
    password: z.string(),
  });

  const { email, password } = registerBodySchema.parse(req.body);

  const signinUseCase = makeSinginUserUseCase();
  const user = await signinUseCase.execute(email);

  const doestPasswordMatch = await compare(password, user.password);

  if (!doestPasswordMatch) throw new Error('Unauthorized');

  const token = await res.jwtSign({ username: user?.email });

  return res.status(200).send({ token });
}
