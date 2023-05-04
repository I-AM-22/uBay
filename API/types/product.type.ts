import { Document, Model, ObjectId, PopulatedDoc } from 'mongoose';
import { IUser } from './user.type';
import { ICategory } from './category.type';

export interface IProduct {
  description: string;
  user: PopulatedDoc<Document<ObjectId> & IUser>;
  category: PopulatedDoc<Document<ObjectId> & ICategory>;
  price: number;
  photos: string[];
  likes: number;
}

export type ProductDoc = IProduct & Document;

export type ProductModel = Model<IProduct, {}, any>;
