import { Document, Model, ObjectId, PopulatedDoc, Types } from 'mongoose';
import { IUser } from './user.type';
import { IMessage } from './message.type';
import { IChat } from './chat.type';

export interface INotification {
  user:  PopulatedDoc<Document<ObjectId> & IUser>;
  message: PopulatedDoc<Document<ObjectId> & IMessage>;
  chat:  PopulatedDoc<Document<ObjectId> & IChat>;
  read: boolean;
}

export type NotificationDoc = INotification & Document;

export type NotificationModel = Model<INotification, {}, any>;
