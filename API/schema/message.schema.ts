import { object, string } from 'zod';

export const messageSchema = object({
  body: object({
    content: string({
      required_error: 'Message must have a content',
    }),
    user: string({
      required_error: 'Message must have a user',
    }),
    chat: string({
      required_error: 'Message must have a chat',
    }),
  }),
});
