import { Schema, model, Query, Types } from 'mongoose';
import { StoreDoc, StoreModel, IStore } from '../types/store.types';

const storeSchema = new Schema<StoreDoc, StoreModel, any>(
  {
    name: { type: String, required: true },
    address: {
      type: String,
      required: true,
    },
    city: {
      type: Types.ObjectId,
      required: true,
      ref: 'City',
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
storeSchema.pre<Query<IStore, IStore>>(/^find/, function (next) {
  this.populate({
    path: 'city',
    select: 'name',
  });
  next();
});

storeSchema.pre('updateMany', function (next) {
  console.log(this.getQuery());
  next();
});
const Store = model<StoreDoc>('Store', storeSchema);

export default Store;
