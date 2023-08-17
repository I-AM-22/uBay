import { Document, Model, ObjectId, PopulatedDoc } from "mongoose";
import { IProduct } from "./product.types";
import { IUser } from "./user.types";
import { ICoupon } from "./coupon.types";

export interface IPayment {
    product: PopulatedDoc<Document<ObjectId>> & IProduct;
    customer: PopulatedDoc<Document<ObjectId>> & IUser;
    coupon: PopulatedDoc<Document<ObjectId>> & ICoupon;
    price: number;
    is_discount: boolean;
}

export type PaymentDoc = IPayment & Document;
export type PaymentModel = Model<IPayment, Object, any>;