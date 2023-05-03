import { Schema, Types, model } from 'mongoose';
import { CategoryDoc, CategoryModel } from '../types/category.type';

const categorySchema = new Schema<CategoryDoc, CategoryModel, any>({
  name: { type: String, required: [true, 'Category must have content'] },
  description: { type: String, required: [true, 'Category must have post'] },
});

const Category = model<CategoryDoc>('Category', categorySchema);

export default Category;
