import { z } from 'zod';
export declare const citySchema: z.ZodObject<{
    body: z.ZodObject<{
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name?: string;
    }, {
        name?: string;
    }>;
}, "strip", z.ZodTypeAny, {
    body?: {
        name?: string;
    };
}, {
    body?: {
        name?: string;
    };
}>;
