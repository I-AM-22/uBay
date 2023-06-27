import { z } from 'zod';

export const couponSchema = z.object({
  body: z.object({
    user: z
      .string({
        required_error: 'يجب أن يحتوي الكوبون على مستخدم',
      })
      .nonempty('يجب أن يحتوي الكوبون على مستخدم'),
    product: z
      .string({
        required_error: 'يجب أن يحتوي الكوبون على منتج',
      })
      .nonempty('يجب أن يحتوي الكوبون على منتج'),
    code: z
      .string({ required_error: 'يجب أن يحتوي الكوبون على كود' })
      .nonempty('يجب أن يحتوي الكوبون على منتج'),
    discount: z
      .number({ required_error: 'يجب أن يحتوي الكوبون على خصم' })
      .nonnegative('يجب أن تكون قيمة الخصم موجبة'),
    expire: z.string({ required_error: 'تاريخ انتهاء صلاحية الكوبون مطلوب' }),
  }),
});
