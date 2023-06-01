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
  },
  { timestamps: true }
);
couponSchema.post('save', async function () {
  await this.populate({
    path: 'product',
    select: 'user photos category price',
  });
  await this.populate({ path: 'user', select: 'name email photo' });
});
couponSchema.pre<Query<ICoupon, ICoupon>>(/^find/, function (next) {
  this.populate({
    path: 'product',
    select: 'user photos category price',
  }).populate({ path: 'user', select: 'name email photo' });
  next();
});

const Coupon = model('Coupon', couponSchema);

export default Coupon;
