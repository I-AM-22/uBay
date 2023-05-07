import { Query, Schema, Types, model } from 'mongoose';
import { IProduct, ProductDoc, ProductModel } from '../types/product.types';
import { CustomModel } from '../types/helper.types';
import { isOwner } from '@utils/logics';

const productSchema = new Schema<ProductDoc, ProductModel, any>(
  {
    description: {
      type: String,
      required: [true, 'Product must have description'],
    },
    user: {
      type: Types.ObjectId,
      required: [true, 'Product must have user'],
      ref: 'User',
    },
    likes: { type: Number, default: 0, min: 0 },
    photos: {
      type: [String],
      validate: {
        validator: checkSize,
        message: 'Product must have at least one photo',
      },
    },

    price: { type: Number, required: [true, 'Product must have a price'] },
    category: {
      type: Types.ObjectId,
      required: [true, 'Product must have category'],
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
