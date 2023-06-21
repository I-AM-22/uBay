import { z } from 'zod';

export const citySchema = z.object({
    body: z.object({
        name: z.string({
            required_error: 'يجب ان يحتوي المدنية على اسم',
        })
    }),
});
