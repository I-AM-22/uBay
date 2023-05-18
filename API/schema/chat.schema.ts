import { object, string } from 'zod';

export const chatSchema = object({
  body: object({
    user: string({
      required_error: 'Chat must have a user',
    }),
    product: string({
      required_error: 'Chat must have a product',
    }),
  }),
});
