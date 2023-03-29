import { Model, Document } from 'mongoose';
import { Response } from 'express';
export interface IUser {
  name: string;
  photo: string;
  email: string;
  role: string;
  password: string;
  passwordConfirm: string | undefined;
  passwordChangedAt: Date | undefined;
  passwordResetToken: string | undefined;
  passwordResetExpires: Date | undefined;
  active: boolean;
  logInTimes: number | undefined;
  bannedForHour: Date;
  correctPassword(password: string): boolean;
  isPasswordChanged(JWTTimestamp: number | undefined): boolean;
  createPasswordResetToken(): string;
  signToken(id: any): string;
  createSendToken(user: any): string;
}
export type UserDoc = IUser & Document;
export type UserModel = Model<IUser, {}, any>;
