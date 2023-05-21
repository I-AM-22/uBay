import { object, string } from 'zod';

export const storeSchema = object({
  body: object({
    name: string({
      required_error: 'Store must have a name',
    }),
    address: string({
      required_error: 'Store must have a address',
    }),
  }),
});
