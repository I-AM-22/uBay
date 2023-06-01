import { z } from 'zod';

export const userSchema = z.object({
  body: z.object({
    name: z
      .string({
        required_error: 'الاسم مطلوب',
      })
      .nonempty('الاسم مطلوب')
      .trim(),
    password: z
      .string({
        required_error: 'كلمة المرور مطلوبة',
      })
      .nonempty('كلمة المرور مطلوبة')
      .min(6, 'كلمة المرور قصيرة جدًا - يجب أن تحتوي على 6 أحرف على الأقل'),
    email: z
      .string({
        required_error: 'البريد الإلكتروني مطلوب',
      })
      .nonempty('البريد الالكتروني مطلوب')
      .email('البريد الإلكتروني غير صالح')
      .trim(),
  }),
});

export const loginInput = z.object({
  body: z.object({
    email: z
      .string({
        required_error: 'البريد الإلكتروني مطلوب',
      })
      .nonempty('البريد الالكتروني مطلوب')
      .email('البريد الإلكتروني غير صالح')
      .trim(),
    password: z
      .string({
        required_error: 'كلمة المرور مطلوبة',
      })
      .nonempty('كلمة المرور مطلوبة')
      .min(6, 'كلمة المرور قصيرة جدًا - يجب أن تحتوي على 6 أحرف على الأقل'),
  }),
});

export const forgotPasswordSchema = z.object({
  body: z.object({
    email: z
      .string({
        required_error: 'البريد الإلكتروني مطلوب',
      })
      .nonempty('البريد الالكتروني مطلوب')
      .email('البريد الإلكتروني غير صالح'),
  }),
});

export const resetPasswordSchema = z.object({
  body: z.object({
    password: z
      .string({ required_error: 'يرجى تقديم كلمة المرور' })
      .nonempty('كلمة المرور مطلوبة')
      .min(6, 'كلمة المرور قصيرة جدًا - يجب أن تحتوي على 6 أحرف على الأقل'),

    token: z
      .string({
        required_error: 'يرجى تقديم رمز إعادة التعيين',
      })
      .nonempty('يرجى تقديم رمز إعادة التعيين'),
  }),
});

export const updatePasswordSchema = z.object({
  body: z.object({
    password: z
      .string({ required_error: 'يرجى تقديم كلمة المرور' })
      .nonempty('كلمة المرور مطلوبة')
      .min(6, 'كلمة المرور قصيرة جدًا - يجب أن تحتوي على 6 أحرف على الأقل'),
    passwordCurrent: z
      .string({
        required_error: 'يرجى تقديم كلمة المرور الحالية',
      })
      .nonempty('يرجى تقديم كلمة المرور الحالية'),
  }),
});
