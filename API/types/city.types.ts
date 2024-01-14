import { Document, Model } from 'mongoose';

export interface ICity {
  name: string;
  deleted: boolean;
}

export type CityDoc = ICity & Document;
export type CityModel = Model<CityDoc, object, any>;
