import { FastifyInstance } from 'fastify';
import { create } from './create';
import { findOne } from './find-one';
import { update } from './update';
import { deletePost } from './delete';
import { findAll } from './find-all';
import { jwtValidate } from '@/http/middleware/jwt-validate';

export async function postRoutes(app: FastifyInstance) {
  app.post('/post/:teacherId', { onRequest: jwtValidate }, create);
  app.get('/post', findAll);
  app.get('/post/:id', findOne);
  app.put('/post/:id', { onRequest: jwtValidate }, update);
  app.delete('/post/:id', { onRequest: jwtValidate }, deletePost);
}
