import { Document, Model, ObjectId, PopulatedDoc } from 'mongoose';
import { IUser } from './user.type';
import { IChat } from './chat.type';

export interface IMessage {
  content: string;
  sender: PopulatedDoc<Document<ObjectId> & IUser>;
  chat: IChat & PopulatedDoc<Document<ObjectId> & IChat>;
}

export type MessageDoc = IMessage & Document;

export type MessageModel = Model<IMessage, {}, any>;
