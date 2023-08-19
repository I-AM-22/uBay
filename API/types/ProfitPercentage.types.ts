import { Document, Model } from 'mongoose';

export interface IProfitPercentage {
  value: string;
}

export type ProfitPercentageDoc = IProfitPercentage & Document;
export type ProfitPercentageModel = Model<ProfitPercentageDoc, object, any>;
