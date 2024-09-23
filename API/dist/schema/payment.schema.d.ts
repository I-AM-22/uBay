import { z } from 'zod';
export declare const paymentSchema: z.ZodObject<{
    body: z.ZodObject<{
        product: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        product?: string;
    }, {
        product?: string;
    }>;
}, "strip", z.ZodTypeAny, {
    body?: {
        product?: string;
    };
}, {
    body?: {
        product?: string;
    };
}>;
