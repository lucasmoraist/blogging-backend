import { FastifyInstance } from 'fastify';
import { create } from './create';
import { findTeacher } from './find-one';

export async function teacherRoutes(app: FastifyInstance) {
  app.post('/teacher', create);
  app.get('/teacher/:id', findTeacher);
}
