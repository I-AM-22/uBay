"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePasswordSchema = exports.resetPasswordSchema = exports.forgotPasswordSchema = exports.loginInput = exports.userSchema = void 0;
const zod_1 = require("zod");
exports.userSchema = zod_1.z.object({
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
exports.forgotPasswordSchema = zod_1.z.object({
    body: zod_1.z.object({
        email: zod_1.z
            .string({
            required_error: 'البريد الإلكتروني مطلوب',
        })
            .nonempty('البريد الالكتروني مطلوب')
            .email('البريد الإلكتروني غير صالح'),
    }),
});
exports.resetPasswordSchema = zod_1.z.object({
    body: zod_1.z.object({
        password: zod_1.z
            .string({ required_error: 'يرجى تقديم كلمة المرور' })
            .nonempty('كلمة المرور مطلوبة')
            .min(6, 'كلمة المرور قصيرة جدًا - يجب أن تحتوي على 6 أحرف على الأقل'),
        token: zod_1.z
            .string({
            required_error: 'يرجى تقديم رمز إعادة التعيين',
        })
            .nonempty('يرجى تقديم رمز إعادة التعيين'),
    }),
});
exports.updatePasswordSchema = zod_1.z.object({
    body: zod_1.z.object({
        password: zod_1.z
            .string({ required_error: 'يرجى تقديم كلمة المرور' })
            .nonempty('كلمة المرور مطلوبة')
            .min(6, 'كلمة المرور قصيرة جدًا - يجب أن تحتوي على 6 أحرف على الأقل'),
        passwordCurrent: zod_1.z
            .string({
            required_error: 'يرجى تقديم كلمة المرور الحالية',
        })
            .nonempty('يرجى تقديم كلمة المرور الحالية'),
    }),
});
//# sourceMappingURL=user.schema.js.map