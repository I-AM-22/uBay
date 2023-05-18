import { object, string } from 'zod';

export const categorySchema = object({
  body: object({
    name: string({
      required_error: 'Category name is required',
    }),
    description: string({
      required_error: 'Category name is required',
    }),
  }),
});
