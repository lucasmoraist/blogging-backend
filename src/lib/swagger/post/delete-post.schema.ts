export const deletePostSchema = {
  summary: 'Delete post',
  description: 'This method delete post by id',
  tags: ['post'],
  security: [{ bearerAuth: [] }],
  params: {
    postId: { type: 'string', format: 'uuid', description: 'id of post' },
  },
  response: {
    200: {
      description: 'Post successfully removed',
      type: 'object',
      properties: {
        message: { type: 'string' },
      },
    },
    404: {
      description: 'Post not found',
      type: 'object',
      properties: {
        message: { type: 'string' },
      },
    },
  },
};
