import { Document, Model, ObjectId, PopulatedDoc } from 'mongoose';
import { IUser } from './user.types';
import { IMessage } from './message.types';
import { IProduct } from './product.types';

export interface IChat {
  name: string;
  customer: PopulatedDoc<Document<ObjectId> & IUser>;
  seller: PopulatedDoc<Document<ObjectId> & IUser>;
  lastMessage?: PopulatedDoc<Document<ObjectId> & IMessage>;
  product: PopulatedDoc<Document<ObjectId> & IProduct>;
  createNotification(userId: string): void;
}

export type ChatDoc = IChat & Document;
export type ChatModel = Model<ChatDoc, object, any>;
