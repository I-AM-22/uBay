import { Model, Document, ObjectId, PopulatedDoc } from 'mongoose';
import { IStore } from './store.type';
export interface IUser {
  id: string;
  name: string;
  photo: string;
  email: string;
  role: string;
  store: PopulatedDoc<Document<ObjectId> & IStore>;
  password: string;
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

export type UserDoc = IUser & Document;
export type UserModel = Model<IUser, {}, any>;
