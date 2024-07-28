import { z } from 'zod';

export const registerParamsSchemaTeacher = z.object({
  teacherId: z.string().uuid(),
});
