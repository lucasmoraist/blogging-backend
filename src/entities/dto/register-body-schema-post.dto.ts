import { z } from 'zod';

export const registerBodySchemaPost = z.object({
  title: z.string(),
  content: z.string(),
});
