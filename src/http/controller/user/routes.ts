import { FastifyInstance } from 'fastify';
import { singup } from './singup';
import { singin } from './singin';
import { singupUserSchema } from '@/lib/swagger/user/singup-user.schema';
import { singinUserSchema } from '@/lib/swagger/user/singin-user.schema';

export async function userRoutes(app: FastifyInstance) {
  app.post('/singup', singupUserSchema, singup);
  app.post('/singin', singinUserSchema, singin);
}
