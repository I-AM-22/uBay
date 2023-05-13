import mongoose, { Model, Document, ObjectId, PopulatedDoc } from 'mongoose';
import { IStore } from './store.types';
export interface IUser {
  name: string;
  photo: string;
  email: string;
  role: string;
  store: PopulatedDoc<Document<ObjectId> & IStore>;
  password: string;
}
export interface UserDoc extends IUser, mongoose.Document {
  createdAt: Date;
  updatedAt: Date;
  passwordChangedAt: Date | undefined;
  passwordResetToken: string | undefined;
  passwordResetExpires: Date | undefined;
  active: boolean;
  correctPassword(password: string): boolean;
  isPasswordChanged(JWTTimestamp: number | undefined): boolean;
  createPasswordResetToken(): string;
  signToken(id: any): string;
  createSendToken(user: any): string;
}

export type UserModel = Model<UserDoc, object, any>;
