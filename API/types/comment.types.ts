import { Document, Model, ObjectId, PopulatedDoc } from 'mongoose';
import { IUser } from './user.types';
import { IProduct } from './product.types';

export interface IComment {
  content: string;
  user: PopulatedDoc<Document<ObjectId>> & IUser;
  product: PopulatedDoc<Document<ObjectId>> & IProduct;
}

export type CommentDoc = IComment & Document;

export type CommentModel = Model<CommentDoc, object, any>;
