import { Document, Model, ObjectId, PopulatedDoc } from 'mongoose';
import { IUser } from './user.type';
import { IProduct } from './product.type';

export interface IComment {
  content: string;
  user: PopulatedDoc<Document<ObjectId> & IUser>;
  product: PopulatedDoc<Document<ObjectId> & IProduct>;
}

export type CommentDoc = IComment & Document;

export type CommentModel = Model<IComment, {}, any>;
