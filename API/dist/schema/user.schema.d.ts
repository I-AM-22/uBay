import { z } from 'zod';
export declare const userSchema: z.ZodObject<{
    body: z.ZodObject<{
        name: z.ZodString;
        password: z.ZodString;
        email: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name?: string;
        password?: string;
        email?: string;
    }, {
        name?: string;
        password?: string;
        email?: string;
    }>;
}, "strip", z.ZodTypeAny, {
    body?: {
        name?: string;
        password?: string;
        email?: string;
    };
}, {
    body?: {
        name?: string;
        password?: string;
        email?: string;
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
export declare const forgotPasswordSchema: z.ZodObject<{
    body: z.ZodObject<{
        email: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        email?: string;
    }, {
        email?: string;
    }>;
}, "strip", z.ZodTypeAny, {
    body?: {
        email?: string;
    };
}, {
    body?: {
        email?: string;
    };
}>;
export declare const resetPasswordSchema: z.ZodObject<{
    body: z.ZodObject<{
        password: z.ZodString;
        token: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        password?: string;
        token?: string;
    }, {
        password?: string;
        token?: string;
    }>;
}, "strip", z.ZodTypeAny, {
    body?: {
        password?: string;
        token?: string;
    };
}, {
    body?: {
        password?: string;
        token?: string;
    };
}>;
export declare const updatePasswordSchema: z.ZodObject<{
    body: z.ZodObject<{
        password: z.ZodString;
        passwordCurrent: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        password?: string;
        passwordCurrent?: string;
    }, {
        password?: string;
        passwordCurrent?: string;
    }>;
}, "strip", z.ZodTypeAny, {
    body?: {
        password?: string;
        passwordCurrent?: string;
    };
}, {
    body?: {
        password?: string;
        passwordCurrent?: string;
    };
}>;
