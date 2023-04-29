import { Document, Model, ObjectId, PopulatedDoc, Types } from 'mongoose';
import { IUser } from './user.type';
import { IMessage } from './message.type';

export interface IChat {
  id: string;
  name: string;
  users: PopulatedDoc<Document<ObjectId> & IUser>[];
  lastMessage?: PopulatedDoc<Document<ObjectId> & IMessage>;
  isGroup: boolean;
  groupAdmin?: PopulatedDoc<Document<ObjectId> & IUser>;
  createNotification(userId: string): void;
}

export type ChatDoc = IChat & Document;

export type ChatModel = Model<IChat, {}, any>;
