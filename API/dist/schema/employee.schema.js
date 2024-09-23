"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateEmployeeSchema = exports.loginInput = exports.employeeSchema = void 0;
const zod_1 = require("zod");
exports.employeeSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z
            .string({
            required_error: 'الاسم مطلوب',
        })
            .nonempty('الاسم مطلوب')
            .trim(),
        password: zod_1.z
            .string({
            required_error: 'كلمة المرور مطلوبة',
        })
            .nonempty('كلمة المرور مطلوبة')
            .min(6, 'كلمة المرور قصيرة جدًا - يجب أن تحتوي على 6 أحرف على الأقل'),
        email: zod_1.z
            .string({
            required_error: 'البريد الإلكتروني مطلوب',
        })
            .nonempty('البريد الالكتروني مطلوب')
            .email('البريد الإلكتروني غير صالح')
            .trim(),
        store: zod_1.z.string({ required_error: 'يجب ان ينتمي الموظف الى  متجر' })
            .nonempty('يجب ان ينتمي الموظف الى  متجر'),
        address: zod_1.z.string({ required_error: 'العنوان مطلوب' })
            .nonempty('العنوان مطلوب'),
    }),
});
exports.loginInput = zod_1.z.object({
    body: zod_1.z.object({
        email: zod_1.z
            .string({
            required_error: 'البريد الإلكتروني مطلوب',
        })
            .nonempty('البريد الالكتروني مطلوب')
            .email('البريد الإلكتروني غير صالح')
            .trim(),
        password: zod_1.z
            .string({
            required_error: 'كلمة المرور مطلوبة',
        })
            .nonempty('كلمة المرور مطلوبة')
            .min(6, 'كلمة المرور قصيرة جدًا - يجب أن تحتوي على 6 أحرف على الأقل'),
    }),
});
exports.updateEmployeeSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z
            .string({}).nonempty(' اسم الموظف مطلوب')
            .trim().optional(),
        password: zod_1.z
            .string().nonempty('كلمة السر مطلوب')
            .min(6, 'كلمة المرور قصيرة جدًا - يجب أن تحتوي على 6 أحرف على الأقل').optional(),
        email: zod_1.z
            .string({}).nonempty('البريد الالكتروني مطلوب').email('البريد الإلكتروني غير صالح').trim().optional(),
        store: zod_1.z.string()
            .nonempty('يجب ان ينتمي الموظف الى  متجر').optional(),
        address: zod_1.z.string()
            .nonempty('العنوان مطلوب').optional(),
    }),
});
//# sourceMappingURL=employee.schema.js.map