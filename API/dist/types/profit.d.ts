import { Document, Model, ObjectId, PopulatedDoc } from "mongoose";
import { IProduct } from "./product.types";
export interface IProfit {
    product: PopulatedDoc<Document<ObjectId>> & IProduct;
    value: number;
    percentage: number;
}
export type ProfitDoc = IProfit & Document;
export type ProfitModel = Model<IProfit, Object, any>;
