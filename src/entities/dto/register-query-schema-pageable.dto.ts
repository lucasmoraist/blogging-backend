import { z } from 'zod';

export const registerQuerySchemaPageable = z.object({
  page: z.coerce.number().default(1),
  limit: z.coerce.number().default(10),
});
