import { Document, Model, ObjectId, PopulatedDoc } from 'mongoose';
import { IUser } from './user.types';
import { IChat } from './chat.types';

export interface IMessage {
  content: string;
  user: PopulatedDoc<Document<ObjectId>> & IUser;
  chat: IChat & PopulatedDoc<Document<ObjectId>> & IChat;
}

export type MessageDoc = IMessage & Document;

export type MessageModel = Model<MessageDoc, object, any>;
