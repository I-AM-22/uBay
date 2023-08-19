import { DeliveryDoc, DeliveryModel, IDelivery } from '../types/delivery.types';
import { Query, Schema, Types, model } from 'mongoose';
import Wallet from './wallet.model';
import User from './user.model';
import Profit from './profit.model';
import ProfitPercentage from './ProfitPercentag.model';

const deliverySchema = new Schema<DeliveryDoc, DeliveryModel, any>(
  {
    payment: {
      type: Types.ObjectId,
      unique: true,
      required: true,
      ref: 'Payment',
    },
    employee_seller: {
      type: Types.ObjectId,
      ref: 'Employee',
    },
    employee_customer: {
      type: Types.ObjectId,
      ref: 'Employee',
    },
    delivery_status: {
      type: String,
      enum: ['wait', 'seller', 'customer'],
      default: 'wait',
    },
    customer_date: {
      type: Date,
      default: null,
    },
    seller_date: {
      type: Date,
      default: null,
    },
    store: {
      type: Types.ObjectId,
      ref: 'Store',
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true, versionKey: false },
    toObject: { virtuals: true, versionKey: false },
  }
);

deliverySchema.pre('save', async function (next) {
  //Check if this document not new and this happen after receive customer only
  if (!this.isNew && this.customer_date != null) {
    const doc = await this.populate('payment');
    const price = doc.payment.price;

    // // //                          buyer
    const buyerWallet = doc.payment.customer.wallet;
    await Wallet.findByIdAndUpdate(buyerWallet.id, {
      $inc: { total: -price, pending: -price },
    });
    //get the profit percentage from database
    let percentage: any = (await ProfitPercentage.findOne({})) ? await ProfitPercentage.findOne({}) : 5;
    if (percentage != 5) {
      percentage = percentage.value;
    }
    const companyFee = (price * percentage) / 100;
    const priceForSeller = price - companyFee;

    // // //                         seller
    const seller = doc.payment.product.user.id;
    await Wallet.findOneAndUpdate(
      { user: seller },
      { $inc: { total: priceForSeller } }
    );

    //                            company
    const company = await User.findOne({ email: 'company@gmail.com' });
    await Wallet.findByIdAndUpdate(company?.wallet.id, {
      $inc: { total: companyFee },
    });
    //add the profit to the profit company
    await Profit.create({
      product: doc.payment.product._id,
      value: companyFee,
      percentage
    });
    next();
  }
});
deliverySchema.pre<Query<IDelivery, IDelivery>>(/^find/, function () {
  this.populate('payment');
});
const Delivery = model<DeliveryDoc, DeliveryModel>('Delivery', deliverySchema);
export default Delivery;
