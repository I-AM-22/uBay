import { z } from 'zod';

export const messageSchema = z.object({
  body: z.object({
    content: z.string({
      required_error: 'يجب أن يحتوي الرسالة على محتوى',
    }),
    user: z.string({
      required_error: 'يجب أن يحتوي الرسالة على مستخدم',
    }),
    chat: z.string({
      required_error: 'يجب أن يحتوي الرسالة على محادثة',
    }),
  }),
});
