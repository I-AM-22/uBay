import { z } from 'zod';
export declare const chatSchema: z.ZodObject<{
    body: z.ZodObject<{
        user: z.ZodString;
        product: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        user?: string;
        product?: string;
    }, {
        user?: string;
        product?: string;
    }>;
}, "strip", z.ZodTypeAny, {
    body?: {
        user?: string;
        product?: string;
    };
}, {
    body?: {
        user?: string;
        product?: string;
    };
}>;
