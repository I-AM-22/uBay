import { z } from 'zod';

export const paymentSchema = z.object({
    body: z.object({
        product: z
            .string({
                required_error: 'يجب ان يكون المنتج موجود',
            })
            .nonempty('يجب ان يكون المنتج موجود'),
    }),
});
