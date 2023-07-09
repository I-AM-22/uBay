import { Model, Schema, Types, model } from "mongoose";
import { ReservationDoc, ReservationModel } from "types/reservation.types";
import Wallet from "./wallet.model";
import AppError from "@utils/appError";
import { STATUS_CODE } from "../types/helper.types";
import Payment from "./payment.models";

const reservationSchema = new Schema<ReservationDoc, ReservationModel, any>(
    {
        payment: {
            type: Types.ObjectId,
            required: true,
            ref: 'Payment'
        },
        is_complete: {
            type: Boolean,
        },
        payment_amount: {
            type: Number,
            required: true,
        },
        note: {
            type: String,
            required: true,
        }
    }, {
    timestamps: true,
    toJSON: { virtuals: true, versionKey: false },
    toObject: { virtuals: true, versionKey: false }
});
//take money to pending from customer
reservationSchema.pre("save", async function (next) {
    const paymentDoc = await Payment.findById(this.payment);
    await Wallet.findByIdAndUpdate(paymentDoc?.customer.wallet._id, {
        $inc: { pending: this.payment_amount },
    });
    next();
});
const Reservation = model<ReservationDoc, ReservationModel>('Reservation', reservationSchema);
export default Reservation;