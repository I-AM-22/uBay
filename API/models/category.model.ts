import { Query, Schema, model } from 'mongoose';
import { CategoryDoc, CategoryModel } from '../types/category.types';
import AppError from '@utils/appError';
import Product from './product.model';

const categorySchema = new Schema<CategoryDoc, CategoryModel, any>(
  {
    name: { type: String, required: true, unique: true },
    description: {
      type: String,
      required: true,
    },
    deleted: {
      type: Boolean,
      default: false,
      select: false,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true, versionKey: false },
    toObject: { virtuals: true, versionKey: false },
  }
);
categorySchema.pre<Query<any, any>>('findOneAndUpdate', async function (next) {
  const { deleted }: any = this.getUpdate();
  if (deleted) {
    const doc = await this.model.findOne({ _id: this.getQuery()._id });
    await Product.updateMany(
      { category: doc.id, is_paid: false },
      { $set: { deleted: true } }
    );
  }
});
const Category = model<CategoryDoc>('Category', categorySchema);

export default Category;
