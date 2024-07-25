export const updatePostSchema = {
  summary: 'Update post',
  description: 'This method update post by id',
  tags: ['post'],
  security: [{ bearerAuth: [] }],
  params: {
    postId: { type: 'string', format: 'uuid', description: 'id of post' },
  },
  body: {
    type: 'object',
    properties: {
      title: { type: 'string' },
      content: { type: 'string' },
    },
  },
  response: {
    200: {
      description: 'Successful response',
      type: 'object',
      properties: {
        title: { type: 'string' },
        content: { type: 'string' },
        createdAt: { type: 'string', format: 'date', example: '2022-07-01' },
        teacher: { type: 'string', format: 'uuid' },
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
