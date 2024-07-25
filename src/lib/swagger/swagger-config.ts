import { SwaggerOptions } from '@fastify/swagger';

export const swaggerConfig: SwaggerOptions = {
  openapi: {
    info: {
      title: 'BLOGGING - BACKEND',
      description: `Está API tem como objetivo apresentar conteúdo escolar através de posts feitos por professores. 
                Seu objetivo fazer o gerenciamente de postagens através de um CRUD que fará a persistência em um bd SQL (PostgreSQL), 
                além disso, a API conta com sistema de autenticação e autorização com JWT.`,
      version: '0.1.0',
      contact: {
        name: 'Tech Challenge - Grupo 8',
        url: '',
        email: '',
      },
      license: {
        name: '',
        identifier: '',
        url: '',
      },
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Dev',
      },
      {
        url: 'https://blogging-latest.onrender.com',
        description: 'Prod',
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
        },
      },
    },
  },
};
