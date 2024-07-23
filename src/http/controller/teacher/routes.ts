import { FastifyInstance } from 'fastify';
import { create } from './create';
import { findTeacher } from './find-one';
import { jwtValidate } from '@/http/middleware/jwt-validate';

export async function teacherRoutes(app: FastifyInstance) {
  app.post('/teacher', { onRequest: jwtValidate }, create);
  app.get('/teacher/:id', { onRequest: jwtValidate }, findTeacher);
}
