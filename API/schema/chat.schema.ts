import { z } from 'zod';

export const chatSchema = z.object({
  body: z.object({
    user: z.string({
      required_error: 'يجب أن تحتوي الدردشة على مستخدم',
    }),
    product: z.string({
      required_error: 'يجب أن تحتوي الدردشة على منتج',
    }),
  }),
});
