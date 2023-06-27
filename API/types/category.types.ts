import { Document, Model } from 'mongoose';

export interface ICategory {
  name: string;
  description: string;
}
export type CategoryDoc = ICategory & Document;

export type CategoryModel = Model<CategoryDoc, object, any>;
