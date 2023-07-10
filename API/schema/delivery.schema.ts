import { z } from 'zod';
export const deliverySchema = z.object({
    body: z.object({
        payment: z
            .string({
                required_error: 'يجب اضافة رقم فاتورة الدفع',
            })
            .nonempty('يجب اضافة رقم فاتورة الدفع'),
        status:z.enum(["0","1"]),
    })
});
export const QrSchema = z.object({
    body: z.object({
        product: z
            .string({
                required_error: 'يجب اضافة  المنتج',
            })
            .nonempty('يجب اضافة  المنتج'),
    })
});