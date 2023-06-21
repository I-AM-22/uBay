import { Document, Model } from 'mongoose';

export interface Icity {
  name: string;
}

export type CityDoc = Icity & Document;
export type CityModel = Model<CityDoc, object, any>;
