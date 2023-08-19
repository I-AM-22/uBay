import { Query, Schema, Types, model } from 'mongoose';
import { IProduct, ProductDoc, ProductModel } from '../types/product.types';
import cls from 'cls-hooked';
import AppError from '@utils/appError';
import { STATUS_CODE } from '../types/helper.types';

const productSchema = new Schema<ProductDoc, ProductModel, any>(
  {
    title: { type: String, required: true },
    content: {
      type: String,
      required: true,
    },
    user: {
      type: Types.ObjectId,
      required: true,
      ref: 'User',
    },
    likedBy: [{ type: Types.ObjectId, ref: 'User' }],
    coupons: [{ type: Types.ObjectId, ref: 'Coupon' }],
    photos: {
      type: [String],
      required: true,
    },
    price: {
      type: Number,
      required: true,
      min: [1, 'يجب ان يكون السعر بقيمة موجبة'],
    },

    is_paid: {
      type: Boolean,
      default: false,
    },
    category: {
      type: Types.ObjectId,
      required: true,
      ref: 'Category',
    },
    store: {
      type: Types.ObjectId,
      required: true,
      ref: 'Store',
    },
    comments: { type: Number, default: 0 },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true, versionKey: false },
    toObject: { virtuals: true, versionKey: false },
  }
);

productSchema.virtual('likes').get(function () {
  if (!this.likedBy) return undefined;
  return this.likedBy.length;
});

productSchema.virtual('likedByMe').get(function () {
  if (!this.likedBy) return undefined;

  const namespace = cls.getNamespace('app');
  const user = namespace?.get('loggedInUserId');
  return this.likedBy.filter((e) => e?.id === user).length ? true : false;
});

productSchema.index({ price: 1 });
productSchema.index({ category: 1 });
productSchema.index({ description: 1 });

productSchema.post('save', async function () {
  await this.populate('category');
  await this.populate({
    path: 'user',
    select: {
      name: 1,
      photo: 1,
      wallet: 0,
      favoriteCategories: 0,
      favoriteCities: 0,
    },
  });
  await this.populate({
    path: 'likedBy',
    select: {
      name: 1,
      photo: 1,
      wallet: 0,
      favoriteCategories: 0,
      favoriteCities: 0,
    },
  });
  await this.populate('store');
});

productSchema.pre<Query<IProduct, IProduct>>(/^find/, async function (next) {
  this.populate({ path: 'category' })
    .populate({
      path: 'user',
      select: {
        name: 1,
        photo: 1,
        wallet: 0,
        favoriteCategories: 0,
        favoriteCities: 0,
      },
    })
    .populate({ path: 'likedBy', select: { name: 1, photo: 1, wallet: 0 } })
    .populate({ path: 'store', select: { name: 1 } })
    .populate({ path: 'coupons', select: { product: 0 } });
  next();
});

//can't remove after product is paid
productSchema.pre<Query<IProduct, IProduct>>(
  'findOneAndRemove',
  async function (next) {
    const doc = await this.model.findOne(this.getQuery());
    if (doc.is_paid) {
      return next(
        new AppError(STATUS_CODE.BAD_REQUEST, [], 'لا يمكنك حذف منتج تم بيعه')
      );
    }
  }
);

const Product = model<ProductDoc, ProductModel>('Product', productSchema);

export default Product;
