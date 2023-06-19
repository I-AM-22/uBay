import { Document, Model, ObjectId, PopulatedDoc } from 'mongoose';
import { IUser } from './user.types';
import { ICategory } from './category.types';

export interface IProduct {
  content: string;
  user: PopulatedDoc<Document<ObjectId> & IUser>;
  category: PopulatedDoc<Document<ObjectId> & ICategory>;
  price: number;
  photos: string[];
  likedBy: PopulatedDoc<Document<ObjectId> & IUser>[];
  comments: number;
  title: string;
}

export type ProductDoc = IProduct & Document;
export type ProductModel = Model<ProductDoc, object, any>;
