// description: {
//     type: String,
//     required: true,
//   },
//   user: {
//     type: Types.ObjectId,
//     required: true,
//     ref: 'User',
//   },
//   likes: { type: Number, default: 0, min: 0 },
//   photos: {
//     type: [String],
//     required: true,
//   },

//   price: { type: Number, required: true },
//   category: {
//     type: Types.ObjectId,
//     required: true,
//     ref: 'Category',

import { object, array, string } from 'zod';

export const productSchema = object({
  body: object({
    content: string({
      required_error: 'Product must have a content',
    }),
    user: string({
      required_error: 'Product must have a user',
    }),
    photos: array(string(), { required_error: 'Product must have a photos' }).min(
      1,
      'Product must have at least one photo'
    ),
    price: string({
      required_error: 'Product must have a price',
    }),
    category: string({
      required_error: 'Product must have a category',
    }),
  }),
});
