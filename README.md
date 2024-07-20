# Blogging - Backend
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Fastify](https://img.shields.io/badge/fastify-%23000000.svg?style=for-the-badge&logo=fastify&logoColor=white)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)

## Documentação
A API Blogging foi projetada para gerenciar postagens das aulas de professores associados em uma plataforma de blog escolar. Esta API fornece endpoints para criar, ler, atualizar e excluir postagens de blog, bem como associá-las a professores específicos. As informações ficam salvas dentro de um banco de dados relacional, PostgreSQL, criado na plataforma Render, onde também foi feito o deploy da aplicação.

Este projeto conta também com um Dockerfile que cria uma imagem do projeto e um workflow, permitindo uma entrega contínua (CI) do projeto.

## Funcionalidades
- **Criar Postagens:** Endpoint para criar novas postagens de blog.
- **Visualizar postagens:** Endpoint para ler postagens existentes.
- **Atualizar Postagens:** Endpoint para atualizar postagens existentes.
- **Excluir Postagens:** Endpoint para excluir postagens de blog.
- **Criar Professor:** Endpoint para criar professor novo.
- **Visualizar professor:** Endpoint para visualizar professor existente.

## Tecnologias utilizadas
- Fastify
- TypeORM
- PostgreSQL
- Docker
- Github Actions
