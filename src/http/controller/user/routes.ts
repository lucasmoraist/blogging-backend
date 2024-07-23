import { FastifyInstance } from 'fastify';
import { singup } from './singup';
import { singin } from './singin';

export async function userRoutes(app: FastifyInstance) {
  app.post('/singup', singup);
  app.post('/singin', singin);
}
