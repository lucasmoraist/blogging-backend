import '@/lib/typeorm/typeorm';
import 'reflect-metadata';
import fastify from 'fastify';
import { teacherRoutes } from './http/controller/teacher/routes';
import { postRoutes } from './http/controller/post/routes';
import fastifyJwt from '@fastify/jwt';
import { env } from './env/index';
import { userRoutes } from './http/controller/user/routes';
import swagger from '@fastify/swagger';
import swaggerUI from '@fastify/swagger-ui';
import { swaggerConfig } from './lib/swagger/swagger-config';
import cors from '@fastify/cors';

export const app = fastify({ logger: true });

app.register(cors, {
  origin: '*',
  allowedHeaders: '*',
  methods: '*',
});

app.register(fastifyJwt, {
  secret: env.JWT_SECRET,
  sign: { expiresIn: '100m' },
});

app.register(swagger, swaggerConfig);

app.register(swaggerUI, {
  routePrefix: '/',
});

app.register(userRoutes);
app.register(teacherRoutes);
app.register(postRoutes);
