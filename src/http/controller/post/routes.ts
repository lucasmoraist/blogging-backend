import { FastifyInstance } from 'fastify';
import { create } from './create';
import { findOne } from './find-one';
import { update } from './update';
import { deletePost } from './delete';
import { findAll } from './find-all';
import { jwtValidate } from '@/http/middleware/jwt-validate';
import { listAllPostsSchema } from '@/lib/swagger/post/list-all-posts.schema';
import { createPostSchema } from '@/lib/swagger/post/create-post.schema';
import { updatePostSchema } from '@/lib/swagger/post/update-post.schema';
import { deletePostSchema } from '@/lib/swagger/post/delete-post.schema';
import { listOnePostSchema } from '@/lib/swagger/post/list-one-post.schema';
import { findKeyword } from './find-keyword';
import { listPostKeywordSchema } from '@/lib/swagger/post/list-post-keyword.schema';

export async function postRoutes(app: FastifyInstance) {
  app.get('/posts', listAllPostsSchema, findAll);
  app.get('/posts/:idPost', listOnePostSchema, findOne);
  app.get('/posts/keyword', listPostKeywordSchema, findKeyword);

  app.post(
    '/posts/:teacherId',
    { schema: createPostSchema, onRequest: jwtValidate },
    create,
  );
  app.put(
    '/posts/:idPost',
    { schema: updatePostSchema, onRequest: jwtValidate },
    update,
  );
  app.delete(
    '/posts/:idPost',
    { schema: deletePostSchema, onRequest: jwtValidate },
    deletePost,
  );
}
