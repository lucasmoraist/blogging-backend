export const singupUserSchema = {
  schema: {
    summary: 'User signin',
    description: 'This method is responsible for creating a new user',
    tags: ['user'],
    body: {
      type: 'object',
      required: ['name', 'email', 'password'],
      properties: {
        name: { type: 'string' },
        email: { type: 'string' },
        password: { type: 'string', format: 'password' },
      },
    },
    response: {
      200: {
        description: 'Successful response',
        type: 'object',
        properties: {
          id: { type: 'string' },
          email: { type: 'string' },
        },
      },
    },
  },
};
