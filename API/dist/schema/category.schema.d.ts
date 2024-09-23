import { z } from 'zod';
export declare const categorySchema: z.ZodObject<{
    body: z.ZodObject<{
        name: z.ZodString;
        description: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name?: string;
        description?: string;
    }, {
        name?: string;
        description?: string;
    }>;
}, "strip", z.ZodTypeAny, {
    body?: {
        name?: string;
        description?: string;
    };
}, {
    body?: {
        name?: string;
        description?: string;
    };
}>;
