import { z } from 'zod';

export const registerBodySchemaTeacher = z.object({
  name: z.string(),
  class: z.string(),
});
