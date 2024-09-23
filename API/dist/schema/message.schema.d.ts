import { z } from 'zod';
export declare const messageSchema: z.ZodObject<{
    body: z.ZodObject<{
        content: z.ZodString;
        user: z.ZodString;
        chat: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        content?: string;
        user?: string;
        chat?: string;
    }, {
        content?: string;
        user?: string;
        chat?: string;
    }>;
}, "strip", z.ZodTypeAny, {
    body?: {
        content?: string;
        user?: string;
        chat?: string;
    };
}, {
    body?: {
        content?: string;
        user?: string;
        chat?: string;
    };
}>;
