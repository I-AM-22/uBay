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

export const updateEmployeeSchema = z.object({
    body: z.object({
        name: z
            .string({
            }).nonempty(' اسم الموظف مطلوب')
            .trim().optional(),
        password: z
            .string().nonempty('كلمة السر مطلوب')
            .min(6, 'كلمة المرور قصيرة جدًا - يجب أن تحتوي على 6 أحرف على الأقل').optional(),
        email: z
            .string({
            }).nonempty('البريد الالكتروني مطلوب').email('البريد الإلكتروني غير صالح').trim().optional(),
        store: z.string()
            .nonempty('يجب ان ينتمي الموظف الى  متجر').optional(),
        address: z.string()
            .nonempty('العنوان مطلوب').optional(),
    }),
});



