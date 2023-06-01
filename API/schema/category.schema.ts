import { z } from 'zod';

export const categorySchema = z.object({
  body: z.object({
    name: z
      .string({
        required_error: 'اسم الفئة مطلوب',
      })
      .nonempty('اسم الفئة مطلوب'),
    description: z
      .string({
        required_error: 'اسم الفئة مطلوب',
      })
      .nonempty('اسم الفئة مطلوب'),
  }),
});
