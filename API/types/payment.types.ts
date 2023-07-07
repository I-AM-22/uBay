import { Document, Model, ObjectId, PopulatedDoc } from "mongoose";
import { IProduct } from "./product.types";
import { IUser } from "./user.types";

export interface IPayment {
    product: PopulatedDoc<Document<ObjectId>> & IProduct;
    customer: PopulatedDoc<Document<ObjectId>> & IUser;
}

export type PaymentDoc = IPayment & Document;
export type PaymentModel = Model<IPayment, Object, any>;