import { z } from 'zod';

export const deliverySchema = z.object({
    body: z.object({
        payment: z
            .string({
                required_error: 'يجب اضافة رقم فاتورة الدفع',
            })
            .nonempty('يجب اضافة رقم فاتورة الدفع')
    })
});