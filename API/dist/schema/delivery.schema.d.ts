import { z } from 'zod';
export declare const deliverySchema: z.ZodObject<{
    body: z.ZodObject<{
        payment: z.ZodString;
        status: z.ZodEnum<["0", "1"]>;
    }, "strip", z.ZodTypeAny, {
        payment?: string;
        status?: "0" | "1";
    }, {
        payment?: string;
        status?: "0" | "1";
    }>;
}, "strip", z.ZodTypeAny, {
    body?: {
        payment?: string;
        status?: "0" | "1";
    };
}, {
    body?: {
        payment?: string;
        status?: "0" | "1";
    };
}>;
export declare const QrSchema: z.ZodObject<{
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
