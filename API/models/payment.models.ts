import { Query, Schema, Types, model } from 'mongoose';
import { IPayment, PaymentDoc, PaymentModel } from 'types/payment.types';
import Product from './product.model';
import AppError from '@utils/appError';
import { STATUS_CODE } from '../types/helper.types';
import Wallet from './wallet.model';
import Delivery from './delivery.model';

const paymentSchema = new Schema<PaymentDoc, PaymentModel, any>(
  {
    product: {
      type: Types.ObjectId,
      unique: true,
      required: true,
      ref: 'Product',
    },
    coupon: { type: Types.ObjectId, default: null, ref: 'Coupon' },
    customer: {
      type: Types.ObjectId,
      required: true,
      ref: 'User',
    },
    price: {
      type: Number,
      required: true,
    },
    is_discount: {
      type: Boolean,
      default: false,
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true, versionKey: false },
    toObject: { virtuals: true, versionKey: false },
  }
);

//check product is paid
paymentSchema.pre('save', async function (next) {
  const proDoc = await Product.findById(this.product);
  if (proDoc?.is_paid) {
    return next(
      new AppError(STATUS_CODE.BAD_REQUEST, [], 'هذا المنتج غير متاح')
    );
  }
  await Product.findByIdAndUpdate(proDoc?.id, { is_paid: true });
  next();
});
//send payment to store and save discount in the product
paymentSchema.post('save', async function (doc) {
  const deliveryDoc = await Delivery.create({ payment: doc.id });
});

//take money from wallet
paymentSchema.post('save', async function (doc) {
  const paymentDoc = await Payment.findById(doc.id);
  await Wallet.findByIdAndUpdate(paymentDoc?.customer.wallet._id, {
    $inc: { pending: this.price },
  });
});

//before delete payment change is_paid to false and return money to his wallet
paymentSchema.pre<Query<IPayment, IPayment>>(
  'findOneAndRemove',
  async function (next) {
    const doc = await this.model.findOne(this.getQuery());
    await Product.findByIdAndUpdate(doc.product.id, { is_paid: false });
    await Wallet.findByIdAndUpdate(doc.customer.wallet.id, {
      $inc: { pending: -doc.price },
    });
    //delete delivery with that
    await Delivery.findOneAndRemove({ payment: doc.id });
    next();
  }
);

paymentSchema.pre<Query<IPayment, IPayment>>(/^find/, function (next) {
  this.populate({
    path: 'product',
    select: { price: 1, likedBy: 0, category: 0, user: 1, store: 1 },
  }).populate({
    path: 'customer',
    select: { name: 1, email: 1, wallet: 1 },
  });
  next();
});

const Payment = model<PaymentDoc, PaymentModel>('Payment', paymentSchema);
export default Payment;
