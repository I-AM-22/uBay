"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QrSchema = exports.deliverySchema = void 0;
const zod_1 = require("zod");
exports.deliverySchema = zod_1.z.object({
    body: zod_1.z.object({
        payment: zod_1.z
            .string({
            required_error: 'يجب اضافة رقم فاتورة الدفع',
        })
            .nonempty('يجب اضافة رقم فاتورة الدفع'),
        status: zod_1.z.enum(["0", "1"]),
    })
});
exports.QrSchema = zod_1.z.object({
    body: zod_1.z.object({
        product: zod_1.z
            .string({
            required_error: 'يجب اضافة  المنتج',
        })
            .nonempty('يجب اضافة  المنتج'),
    })
});
//# sourceMappingURL=delivery.schema.js.map