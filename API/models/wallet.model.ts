import { Types, Schema, model, Query } from 'mongoose';
import { IWallet, WalletDoc, WalletModel } from 'types/wallet.types';

const walletSchema = new Schema<WalletDoc, WalletModel, any>(
  {
    user: { type: Types.ObjectId, ref: 'User', unique: true },
    total: {
      type: Number,
      required: true,
      default: 0,
    },
    pending: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    toJSON: { virtuals: true, versionKey: false },
    toObject: { virtuals: true, versionKey: false },
    timestamps: true,
  }
);

walletSchema.virtual('available').get(function () {
  return this.total - this.pending;
});

const Wallet = model<WalletDoc>('Wallet', walletSchema);

export default Wallet;
