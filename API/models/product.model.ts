import { Query, Schema, Types, model } from 'mongoose';
import { IProduct, ProductDoc, ProductModel } from '../types/product.types';
import { CustomModel } from '../types/helper.types';
import { isOwner } from '@utils/logics';

const productSchema = new Schema<ProductDoc, ProductModel, any>(
  {
    content: {
      type: String,
      required: true,
    },
    user: {
      type: Types.ObjectId,
      required: true,
      ref: 'User',
    },
    likes: { type: Number, default: 0, min: 0 },
    photos: {
      type: [String],
      required: true,
    },

    price: { type: Number, required: true },
    category: {
      type: Types.ObjectId,
      required: true,
      ref: 'Category',
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true, versionKey: false },
    toObject: { virtuals: true, versionKey: false },
  }
);

function checkSize(val: any) {
  return val.length > 0;
}

productSchema.index({ price: 1 });
productSchema.index({ category: 1 });
productSchema.post('save', async function () {
  await this.populate('category');
  await this.populate({
    path: 'user',
    select: 'name photo email',
  });
});

productSchema.pre<Query<IProduct, IProduct>>(/^find/, function (next) {
  this.populate({ path: 'category' }).populate({
    path: 'user',
    select: 'name photo email',
  });
  next();
});

productSchema.statics.findByIdAndCheckAuthorization = async function (
  id: string,
  user: Express.User
) {
  await isOwner(this, id, user);
};

const Product = model<ProductDoc, ProductModel>(
  'Product',
  productSchema
) as CustomModel<ProductDoc>;

export default Product;
