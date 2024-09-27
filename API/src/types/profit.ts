import { Document, Model, ObjectId, PopulatedDoc } from "mongoose";
import { IProduct } from "./product.types";
import { IUser } from "./user.types";
import { ICoupon } from "./coupon.types";

export interface IProfit {
    product: PopulatedDoc<Document<ObjectId>> & IProduct;
    value: number;
    percentage:number;
}

export type ProfitDoc = IProfit & Document;
export type ProfitModel = Model<IProfit, Object, any>;