import { Document, Model } from 'mongoose';

export interface ICity {
  name: string;
}

export type CityDoc = ICity & Document;
export type CityModel = Model<CityDoc, object, any>;
