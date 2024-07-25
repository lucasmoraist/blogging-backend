export const listAllPostsSchema = {
  schema: {
    summary: 'List all post',
    description: 'This method returns a list with all posts',
    tags: ['post'],
    querystring: {
      page: {
        type: 'number',
      },
      limit: {
        type: 'number',
      },
    },

    response: {
      200: {
        description: 'Successful response',
        type: 'array',
        items: {
          type: 'object',
          properties: {
            id: { type: 'string', format: 'uuid' },
            title: { type: 'string' },
            content: { type: 'string' },
            createdat: {
              type: 'string',
              format: 'date',
              example: '2022-07-01',
            },
            teacher: { type: 'string', format: 'uuid' },
          },
        },
      },
    },
  },
};
