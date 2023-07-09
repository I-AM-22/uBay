import { Document, Model, ObjectId, PopulatedDoc } from "mongoose";
import { IPayment } from "./payment.types";

export interface IReservation {
    payment: PopulatedDoc<Document<ObjectId>> & IPayment;
    payment_amount: number;
    is_complete: boolean;
    note: string;
}

export type ReservationDoc = IReservation & Document;
export type ReservationModel = Model<IReservation, Object, any>;