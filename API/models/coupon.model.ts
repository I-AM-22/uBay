import { Query, Schema, Types, model } from 'mongoose';
import { CouponDoc, CouponModel, ICoupon } from 'types/coupon.types';

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
      required: true,
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
    select: { name: 1, photo: 1, wallet: 0 },
  });
});
couponSchema.pre<Query<ICoupon, ICoupon>>(/^find/, function (next) {
  this.populate({
    path: 'product',
    select: { user: 0, title: 1, photos: 1, category: 1, price: 1, likedBy: 0 },
  }).populate({ path: 'user', select: { name: 1, photo: 1, wallet: 0 } });
  next();
});

couponSchema.pre<Query<ICoupon, ICoupon>>(/^find/, function (next) {
  this.find({ expire: { $gt: Date.now() }, active: true });
  next();
});

const Coupon = model('Coupon', couponSchema);

export default Coupon;
