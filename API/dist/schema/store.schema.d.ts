import { z } from 'zod';
export declare const storeSchema: z.ZodObject<{
    body: z.ZodObject<{
        name: z.ZodString;
        address: z.ZodString;
        city: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name?: string;
        address?: string;
        city?: string;
    }, {
        name?: string;
        address?: string;
        city?: string;
    }>;
}, "strip", z.ZodTypeAny, {
    body?: {
        name?: string;
        address?: string;
        city?: string;
    };
}, {
    body?: {
        name?: string;
        address?: string;
        city?: string;
    };
}>;
