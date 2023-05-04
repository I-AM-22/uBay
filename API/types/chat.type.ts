import { Document, Model, ObjectId, PopulatedDoc } from 'mongoose';
import { IUser } from './user.type';
import { IMessage } from './message.type';
import { IProduct } from './product.type';

export interface IChat {
  name: string;
  users: PopulatedDoc<Document<ObjectId> & IUser>[];
  lastMessage?: PopulatedDoc<Document<ObjectId> & IMessage>;
  product: PopulatedDoc<Document<ObjectId> & IProduct>;
  createNotification(userId: string): void;
}

export type ChatDoc = IChat & Document;

export type ChatModel = Model<IChat, {}, any>;
