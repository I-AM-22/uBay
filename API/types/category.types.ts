import { Document, Model } from 'mongoose';

export interface ICategory {
  name: string;
  description: string;
  deleted: boolean;
}
export type CategoryDoc = ICategory & Document;

export type CategoryModel = Model<CategoryDoc, object, any>;
