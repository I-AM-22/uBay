import { z } from 'zod';

export const storeSchema = z.object({
  body: z.object({
    name: z
      .string({
        required_error: 'يجب أن يحتوي المتجر على اسم',
      })
      .nonempty('يجب أن يحتوي المتجر على اسم'),
    address: z
      .string({
        required_error: 'يجب أن يحتوي المتجر على عنوان',
      })
      .nonempty('يجب أن يحتوي المتجر على عنوان'),
  }),
});
