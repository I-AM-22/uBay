import { z } from 'zod';

export const percentageSchema = z.object({
    body: z.object({
      value: z
        .string({
          required_error: 'يجب أن يحتوي الخصم على قيمة',
        })
        .refine(value => {
          const numericValue = Number(value);
          return !isNaN(numericValue) && numericValue >= 1 && numericValue <= 100;
        }, {
          message: 'نسبة الربح يجب أن تكون بين 1 و 100',
        }),
    }),
  });
