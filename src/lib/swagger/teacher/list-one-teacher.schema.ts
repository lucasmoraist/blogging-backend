export const listOneTeacherSchema = {
  summary: 'List one teacher',
  description: 'This method is return a teacher by id',
  tags: ['teacher'],
  params: {
    id: { type: 'string', format: 'uuid', description: 'Teacher id' },
  },
  response: {
    200: {
      description: 'Successful response',
      type: 'object',
      properties: {
        id: { type: 'string', format: 'uuid' },
        name: { type: 'string' },
        class: { type: 'string' },
        posts: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              id: { type: 'string', format: 'uuid' },
              title: { type: 'string' },
              content: { type: 'string' },
              createdAt: { type: 'string', format: 'date-time' },
            },
          },
        },
      },
    },
    404: {
      description: 'Teacher not found',
      type: 'object',
      properties: {
        message: { type: 'string' },
      },
    },
  },
};
