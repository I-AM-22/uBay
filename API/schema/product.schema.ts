import { z } from 'zod';

export const productSchema = z.object({
  body: z.object({
    title: z
      .string({
        required_error: 'يجب أن يحتوي المنتج على عنوان',
      })
      .nonempty('يجب أن يحتوي المنتج على عنوان'),
    content: z
      .string({
        required_error: 'يجب أن يحتوي المنتج على محتوى',
      })
      .nonempty('يجب أن يحتوي المنتج على محتوى'),
    user: z
      .string({
        required_error: 'يجب أن يحتوي المنتج على مستخدم',
      })
      .nonempty('يجب أن يحتوي المنتج على مستخدم'),
    photos:z
      .array(z.string(), { required_error: 'يجب أن يحتوي المنتج على صور' })
      .nonempty('يجب أن يحتوي المنتج على صور')
      .min(1, 'يجب أن يحتوي المنتج على صورة واحدة على الأقل'),
    price: z.string({
        required_error: 'يجب أن يحتوي المنتج على سعر',
      })
      ,
    category: z
      .string({
        required_error: 'يجب أن يحتوي المنتج على فئة',
      })
      .nonempty('يجب أن يحتوي المنتج على فئة'),
  }),
});
