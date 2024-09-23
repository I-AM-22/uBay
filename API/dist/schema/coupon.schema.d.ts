import { z } from 'zod';
export declare const couponSchema: z.ZodObject<{
    body: z.ZodObject<{
        user: z.ZodString;
        product: z.ZodString;
        discount: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        user?: string;
        product?: string;
        discount?: number;
    }, {
        user?: string;
        product?: string;
        discount?: number;
    }>;
}, "strip", z.ZodTypeAny, {
    body?: {
        user?: string;
        product?: string;
        discount?: number;
    };
}, {
    body?: {
        user?: string;
        product?: string;
        discount?: number;
    };
}>;
