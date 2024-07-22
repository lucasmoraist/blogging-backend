import '@/lib/typeorm/typeorm';
import 'reflect-metadata';
import fastify from 'fastify';
import { teacherRoutes } from './http/controller/teacher/routes';
import { postRoutes } from './http/controller/post/routes';

export const app = fastify();

app.register(teacherRoutes);
app.register(postRoutes);
