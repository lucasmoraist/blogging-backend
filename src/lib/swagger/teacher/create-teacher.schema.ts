export const createTeacherSchema = {
  summary: 'Create a teacher',
  description: 'This method is responsible for creating a new teacher',
  tags: ['teacher'],
  security: [{ bearerAuth: [] }],
  body: {
    type: 'object',
    required: ['name', 'class'],
    properties: {
      name: { type: 'string' },
      class: { type: 'string' },
    },
  },
  response: {
    200: {
      description: 'Successful response',
      type: 'object',
      properties: {
        id: { type: 'string', format: 'uuid' },
        name: { type: 'string' },
        class: { type: 'string' },
      },
    },
  },
};
