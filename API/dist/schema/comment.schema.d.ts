import { z } from 'zod';
export declare const commentSchema: z.ZodObject<{
    body: z.ZodObject<{
        content: z.ZodString;
        user: z.ZodString;
        product: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        content?: string;
        user?: string;
        product?: string;
    }, {
        content?: string;
        user?: string;
        product?: string;
    }>;
}, "strip", z.ZodTypeAny, {
    body?: {
        content?: string;
        user?: string;
        product?: string;
    };
}, {
    body?: {
        content?: string;
        user?: string;
        product?: string;
    };
}>;
