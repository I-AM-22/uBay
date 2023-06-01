import { z } from 'zod';

export const messageSchema = z.object({
  body: z.object({
    content: z
      .string({
        required_error: 'يجب أن تحتوي الرسالة على محتوى',
      })
      .nonempty('يجب أن تحتوي الرسالة على محتوى'),
    user: z
      .string({
        required_error: 'يجب أن تحتوي الرسالة على مستخدم',
      })
      .nonempty('يجب أن تحتوي الرسالة على مستخدم'),
    chat: z
      .string({
        required_error: 'يجب أن تحتوي الرسالة على محادثة',
      })
      .nonempty('يجب أن تحتوي الرسالة على محادثة'),
  }),
});
