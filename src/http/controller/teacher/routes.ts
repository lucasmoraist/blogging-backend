import { FastifyInstance } from 'fastify';
import { create } from './create';
import { findTeacher } from './find-one';
import { jwtValidate } from '@/http/middleware/jwt-validate';
import { createTeacherSchema } from '@/lib/swagger/teacher/create-teacher.schema';
import { listOneTeacherSchema } from '@/lib/swagger/teacher/list-one-teacher.schema';

export async function teacherRoutes(app: FastifyInstance) {
  app.get(
    '/teacher/:teacherId',
    { schema: listOneTeacherSchema, onRequest: jwtValidate },
    findTeacher,
  );

  app.post(
    '/teacher',
    { schema: createTeacherSchema, onRequest: jwtValidate },
    create,
  );
}
