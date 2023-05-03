import { Document, Model } from 'mongoose';

export interface IStore {
  name: string;
  address: string;
}
export type StoreDoc = IStore & Document;

export type StoreModel = Model<StoreDoc, {}, any>;
