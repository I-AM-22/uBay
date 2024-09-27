import { Model, Document, ObjectId, PopulatedDoc } from 'mongoose';
import { IUser } from './user.types';

export interface IWallet {
  user: PopulatedDoc<Document<ObjectId>> & IUser;
  total: number;
  pending: number;
  available: number;
}
export interface WalletDoc extends IWallet, Document {}

export interface WalletModel extends Model<WalletDoc, object, any> {}
