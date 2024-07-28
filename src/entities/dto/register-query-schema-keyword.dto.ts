import { z } from 'zod';

export const registerQuerySchemaKeyword = z.object({
  keyword: z.string(),
});
