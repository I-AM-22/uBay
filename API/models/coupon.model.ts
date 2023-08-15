import { Query, Schema, Types, model } from 'mongoose';
import { CouponDoc, CouponModel, ICoupon } from 'types/coupon.types';
import Product from './product.model';

const couponSchema = new Schema<CouponDoc, CouponModel, any>(
  {
    user: {
      type: Types.ObjectId,
      required: true,
      ref: 'User',
    },
    product: { type: Types.ObjectId, required: true, ref: 'Product' },
    expire: {
      type: Date,
      default: null,
    },
    discount: {
      type: Number,
      required: true,
    },
    active: { type: Boolean, default: true },
  },
  { timestamps: true }
);

couponSchema.index({ product: 1, user: 1 }, { unique: true });
couponSchema.post('save', async function () {
  await this.populate({
    path: 'product',
    select: { user: 0, title: 1, photos: 1, category: 1, price: 1, likedBy: 0 },
  });
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
});
couponSchema.pre<Query<ICoupon, ICoupon>>(/^find/, function (next) {
  this.populate({
    path: 'product',
    select: {
      user: 1,
      title: 1,
      photos: 1,
      category: 1,
      price: 1,
      is_paid: 1,
      likedBy: 0,
      coupons: 0,
    },
  });
  this.populate({ path: 'user', select: { name: 1, photo: 1, wallet: 0 } });
  next();
});

couponSchema.pre<Query<ICoupon, ICoupon>>(/^find/, function (next) {
  this.find({
    $or: [
      { expire: { $gt: Date.now() } },
      { expire: null }, // Expires is null
    ],
    active: true,
  });
  next();
});

//save coupon to product
couponSchema.post('save', async function (doc) {
  await Product.findByIdAndUpdate(doc.product.id, {
    $push: { coupons: doc._id },
  });
});

const Coupon = model('Coupon', couponSchema);

export default Coupon;
