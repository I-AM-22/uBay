import { z } from 'zod';

export const commentSchema = z.object({
  body: z.object({
    content: z.string({
      required_error: 'يجب أن يحتوي التعليق على محتوى',
    }),
    user: z.string({
      required_error: 'يجب أن يحتوي التعليق على مستخدم',
    }),
    product: z.string({
      required_error: 'يجب أن يحتوي التعليق على منتج',
    }),
  }),
});
