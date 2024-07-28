import { z } from 'zod';

export const registerParamsSchemaPost = z.object({
  idPost: z.string().uuid(),
});
