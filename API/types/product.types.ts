import { Document, Model, ObjectId, PopulatedDoc } from 'mongoose';
import { IUser } from './user.types';
import { ICategory } from './category.types';
import { IStore } from './store.types';
import { ICoupon } from './coupon.types';

export interface IProduct {
  content: string;
  user: PopulatedDoc<Document<ObjectId>> & IUser;
  customer: PopulatedDoc<Document<ObjectId>> & IUser;
  category: PopulatedDoc<Document<ObjectId>> & ICategory;
  price: number;
  photos: string[];
  likedBy: PopulatedDoc<Document<ObjectId>>[] & IUser[];
  coupons: PopulatedDoc<Document<ObjectId>>[] & ICoupon[];
  comments: number;
  title: string;
  is_paid: boolean;
  store: PopulatedDoc<Document<ObjectId>> & IStore;
  discount: number;
}

export type ProductDoc = IProduct & Document;
export type ProductModel = Model<ProductDoc, object, any>;
