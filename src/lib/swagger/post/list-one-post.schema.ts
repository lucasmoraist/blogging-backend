export const listOnePostSchema = {
  schema: {
    summary: 'List one post',
    description: 'This method is return a post by id',
    tags: ['post'],
    params: {
      postId: { type: 'string', format: 'uuid', description: 'Post id' },
    },
    response: {
      200: {
        description: 'Successful response',
        type: 'object',
        properties: {
          id: { type: 'string', format: 'uuid' },
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
  },
};
