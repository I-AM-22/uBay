import { Document, Model, ObjectId, PopulatedDoc } from 'mongoose';
import { IUser } from './user.types';
import { IMessage } from './message.types';
import { IChat } from './chat.types';

export interface INotification {
  user: PopulatedDoc<Document<ObjectId>> & IUser;
  message: PopulatedDoc<Document<ObjectId>> & IMessage;
  chat: PopulatedDoc<Document<ObjectId>> & IChat;
  read: boolean;
}

export type NotificationDoc = INotification & Document;

export type NotificationModel = Model<NotificationDoc, object, any>;
