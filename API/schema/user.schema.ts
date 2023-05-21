import { z } from 'zod';

export const userSchema = z.object({
  body: z.object({
    name: z.string({
      required_error: 'الاسم مطلوب',
    }),
    password: z
      .string({
        required_error: 'كلمة المرور مطلوبة',
      })
      .min(6, 'كلمة المرور قصيرة جدًا - يجب أن تحتوي على 6 أحرف على الأقل'),
    email: z
      .string({
        required_error: 'البريد الإلكتروني مطلوب',
      })
      .email('البريد الإلكتروني غير صالح'),
  }),
});

export const loginInput = z.object({
  body: z.object({
    email: z
      .string({
        required_error: 'البريد الإلكتروني مطلوب',
      })
    ,
    password: z
      .string({
        required_error: 'كلمة المرور مطلوبة',
      })
      .min(6, 'كلمة المرور قصيرة جدًا - يجب أن تحتوي على 6 أحرف على الأقل'),
  }),
});

export const forgotPasswordSchema = z.object({
  body: z.object({
    email: z.string({
      required_error: 'البريد الإلكتروني مطلوب',
    }),
  }),
});

export const resetPasswordSchema = z.object({
  body: z.object({
    password: z.string({ required_error: 'يرجى تقديم كلمة المرور' }),
    token: z.string({
      required_error: 'يرجى تقديم رمز إعادة التعيين',
    }),
  }),
});

export const updatePasswordSchema = z.object({
  body: z.object({
    password: z.string({ required_error: 'يرجى تقديم كلمة المرور' }),
    passwordCurrent: z.string({
      required_error: 'يرجى تقديم كلمة المرور الحالية',
    }),
  }),
});
