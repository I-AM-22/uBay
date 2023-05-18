import { Schema, model } from 'mongoose';
import { CategoryDoc, CategoryModel } from '../types/category.types';

const categorySchema = new Schema<CategoryDoc, CategoryModel, any>(
  {
    name: { type: String, required: true, unique: true },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true, versionKey: false },
    toObject: { virtuals: true, versionKey: false },
  }
);

const Category = model<CategoryDoc>('Category', categorySchema);

export default Category;
