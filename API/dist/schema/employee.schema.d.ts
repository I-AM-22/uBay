import { z } from 'zod';
export declare const employeeSchema: z.ZodObject<{
    body: z.ZodObject<{
        name: z.ZodString;
        password: z.ZodString;
        email: z.ZodString;
        store: z.ZodString;
        address: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name?: string;
        password?: string;
        email?: string;
        store?: string;
        address?: string;
    }, {
        name?: string;
        password?: string;
        email?: string;
        store?: string;
        address?: string;
    }>;
}, "strip", z.ZodTypeAny, {
    body?: {
        name?: string;
        password?: string;
        email?: string;
        store?: string;
        address?: string;
    };
}, {
    body?: {
        name?: string;
        password?: string;
        email?: string;
        store?: string;
        address?: string;
    };
}>;
export declare const loginInput: z.ZodObject<{
    body: z.ZodObject<{
        email: z.ZodString;
        password: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        email?: string;
        password?: string;
    }, {
        email?: string;
        password?: string;
    }>;
}, "strip", z.ZodTypeAny, {
    body?: {
        email?: string;
        password?: string;
    };
}, {
    body?: {
        email?: string;
        password?: string;
    };
}>;
export declare const updateEmployeeSchema: z.ZodObject<{
    body: z.ZodObject<{
        name: z.ZodOptional<z.ZodString>;
        password: z.ZodOptional<z.ZodString>;
        email: z.ZodOptional<z.ZodString>;
        store: z.ZodOptional<z.ZodString>;
        address: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name?: string;
        password?: string;
        email?: string;
        store?: string;
        address?: string;
    }, {
        name?: string;
        password?: string;
        email?: string;
        store?: string;
        address?: string;
    }>;
}, "strip", z.ZodTypeAny, {
    body?: {
        name?: string;
        password?: string;
        email?: string;
        store?: string;
        address?: string;
    };
}, {
    body?: {
        name?: string;
        password?: string;
        email?: string;
        store?: string;
        address?: string;
    };
}>;
