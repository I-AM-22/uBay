import { z } from 'zod';
export declare const productSchema: z.ZodObject<{
    body: z.ZodObject<{
        title: z.ZodString;
        content: z.ZodString;
        user: z.ZodString;
        photos: z.ZodArray<z.ZodString, "atleastone">;
        price: z.ZodString;
        category: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        title?: string;
        content?: string;
        user?: string;
        photos?: [string, ...string[]];
        price?: string;
        category?: string;
    }, {
        title?: string;
        content?: string;
        user?: string;
        photos?: [string, ...string[]];
        price?: string;
        category?: string;
    }>;
}, "strip", z.ZodTypeAny, {
    body?: {
        title?: string;
        content?: string;
        user?: string;
        photos?: [string, ...string[]];
        price?: string;
        category?: string;
    };
}, {
    body?: {
        title?: string;
        content?: string;
        user?: string;
        photos?: [string, ...string[]];
        price?: string;
        category?: string;
    };
}>;
