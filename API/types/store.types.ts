import { Document, Model,PopulatedDoc,ObjectId} from 'mongoose';
import {Icity} from './city.types'
export interface IStore {
  name: string;
  address: string;
  city:PopulatedDoc<Document<ObjectId> & Icity>;
}
export type StoreDoc = IStore & Document;

export type StoreModel = Model<StoreDoc, object, any>;
