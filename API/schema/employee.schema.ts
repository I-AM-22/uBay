import { z } from 'zod';

export const employeeSchema = z.object({
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
        store: z.string({ required_error: 'يجب ان ينتمي الموظف الى  متجر' })
            .nonempty('يجب ان ينتمي الموظف الى  متجر'),
        address: z.string({ required_error: 'العنوان مطلوب' })
            .nonempty('العنوان مطلوب'),
        phone_number: z.string({ required_error: 'رقم الهاتف مطلوب' })
            .nonempty('رقم الهاتف مطلوب'),
        work_time: z.string({ required_error: 'وقت العمل مطلوب' })
            .nonempty('وقت العمل مطلوب مطلوب'),
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
