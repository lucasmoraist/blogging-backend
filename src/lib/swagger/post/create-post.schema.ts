export const createPostSchema = {
  summary: 'Create a post',
  description: 'This method is responsible for creating a new post',
  tags: ['post'],
  security: [{ bearerAuth: [] }],
  params: {
    teacherId: { type: 'string', format: 'uuid', description: 'Teacher id' },
  },
  body: {
    type: 'object',
    required: ['title', 'content'],
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
        id: { type: 'string', format: 'uuid' },
        title: { type: 'string' },
        content: { type: 'string' },
        createdAt: { type: 'string', format: 'date', example: '2022-07-01' },
        teacher: { type: 'string', format: 'uuid' },
      },
    },
  },
};
