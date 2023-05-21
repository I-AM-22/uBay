import { object, string } from 'zod';

export const commentSchema = object({
  body: object({
    content: string({
      required_error: 'Comment must have a content',
    }),
    user: string({
      required_error: 'Comment must have a user',
    }),
    product: string({
      required_error: 'Comment must have a product',
    }),
  }),
});
