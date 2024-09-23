import { z } from 'zod';
export declare const percentageSchema: z.ZodObject<{
    body: z.ZodObject<{
        value: z.ZodEffects<z.ZodString, string, string>;
    }, "strip", z.ZodTypeAny, {
        value?: string;
    }, {
        value?: string;
    }>;
}, "strip", z.ZodTypeAny, {
    body?: {
        value?: string;
    };
}, {
    body?: {
        value?: string;
    };
}>;
