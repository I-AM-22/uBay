import { Schema, Types, model } from 'mongoose';
import { ProductDoc, ProductModel } from '../types/product.type';

const productSchema = new Schema<ProductDoc, ProductModel, any>({
  description: { type: String, required: [true, 'Product must have content'] },
  user: { type: Types.ObjectId, required: [true, 'Product must have user'] },
  likes: { type: Number, default: 0 },
  photos: [String],
  price: { type: Number, required: [true, 'Product must have a price'] },
  category: { type: Types.ObjectId, required: [true, 'Product must have '] },
});

const Product = model<ProductDoc>('Product', productSchema);

export default Product;
