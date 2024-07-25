export const singinUserSchema = {
  schema: {
    summary: 'User signin',
    description: 'This method generates an access token for a registered user',
    tags: ['user'],
    body: {
      type: 'object',
      required: ['email', 'password'],
      properties: {
        email: { type: 'string' },
        password: { type: 'string', format: 'password' },
      },
    },
    response: {
      200: {
        description: 'Successful response',
        type: 'object',
        properties: {
          token: { type: 'string' },
        },
      },
    },
  },
};
