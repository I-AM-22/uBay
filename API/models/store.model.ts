import { Schema, model } from 'mongoose';
import { StoreDoc, StoreModel } from '../types/store.types';

const storeSchema = new Schema<StoreDoc, StoreModel, any>(
  {
    name: { type: String, required: [true, 'Store must have content'] },
    address: {
      type: String,
      required: [true, 'Please provide a store address'],
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true, versionKey: false },
    toObject: { virtuals: true, versionKey: false },
  }
);

const Store = model<StoreDoc>('Store', storeSchema);

export default Store;
