import '@/lib/typeorm/typeorm';
import 'reflect-metadata';
import fastify from 'fastify';
import { teacherRoutes } from './http/controller/teacher/routes';
import { postRoutes } from './http/controller/post/routes';
import fastifyJwt from '@fastify/jwt';
import { env } from './env/index';
import { userRoutes } from './http/controller/user/routes';

export const app = fastify({ logger: true });

app.register(fastifyJwt, {
  secret: env.JWT_SECRET,
  sign: { expiresIn: '100m' },
});

app.register(userRoutes);
app.register(teacherRoutes);
app.register(postRoutes);
