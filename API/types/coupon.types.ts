import { Document, Model, ObjectId, PopulatedDoc } from 'mongoose';
import { IUser } from './user.types';
import { IProduct } from './product.types';

export interface ICoupon {
  discount: number;
  user: PopulatedDoc<Document<ObjectId>> & IUser;
  product: PopulatedDoc<Document<ObjectId>> & IProduct;
  expire: Date;
  active: boolean;
}

export type CouponDoc = ICoupon & Document;

export type CouponModel = Model<CouponDoc, object, any>;
