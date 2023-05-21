import { object, string } from 'zod';

export const userSchema = object({
  body: object({
    name: string({
      required_error: 'Name is required',
    }),
    password: string({
      required_error: 'Password is required',
    }).min(6, 'Password too short - should be 6 chars minimum'),
    email: string({
      required_error: 'Email is required',
    }).email('Not a valid email'),
  }),
});

export const loginInput = object({
  body: object({
    email: string({
      required_error: 'Email is required',
    }),
    password: string({
      required_error: 'Password is required',
    }).min(6, 'Password too short - should be 6 chars minimum'),
  }),
});

export const forgotPasswordSchema = object({
  body: object({
    email: string({
      required_error: 'Email is required',
    }),
  }),
});

export const resetPasswordSchema = object({
  body: object({
    password: string({ required_error: 'Please provide password ' }),
    token: string({
      required_error: 'Please provide reset token ',
    }),
  }),
});
export const updatePasswordSchema = object({
  body: object({
    password: string({ required_error: 'Please provide password ' }),
    passwordCurrent: string({
      required_error: 'Please provide current password ',
    }),
  }),
});
