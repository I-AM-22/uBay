import { DeliveryDoc, DeliveryModel, IDelivery } from "../types/delivery.types";
import { Query, Schema, Types, model } from "mongoose";
import AppError from "@utils/appError";
import { STATUS_CODE } from "../types/helper.types";
import Wallet from "./wallet.model";
import Payment from "./payment.models";

const deliverySchema = new Schema<DeliveryDoc, DeliveryModel, any>(
    {
        payment: {
            type: Types.ObjectId,
            required: true,
            ref: "Payment"
        },
        employee: {
            type: Types.ObjectId,
            required: true,
            ref: "Employee"
        },
        customer_status: {
            type: Boolean,
            default: false,
        },
        customer_receipt: {
            type: Date,
            default: null
        }
    }, {
    timestamps: true,
    toJSON: { virtuals: true, versionKey: false },
    toObject: { virtuals: true, versionKey: false },
});
// deliverySchema.pre("save", async function (next) {
//     if (this.customer_status) {
//         console.log(this.customer_status);
//         return next(new AppError(STATUS_CODE.BAD_REQUEST, [], ' رقم التوصيل تم تسليمه من قبل للمشتري يرجى اختيار رقم توصيل اخر'));
//     }
//     next();
// });
//update wallet between buyer and seller
deliverySchema.pre('save', async function (next) {
    if (!this.isNew) {
        const doc = await this.populate('payment');
        const product = doc.payment.product;
        //                          buyer
        const buyerWallet = doc.payment.customer.wallet;
        await Wallet.findByIdAndUpdate(buyerWallet.id, {
            $inc: { total: -product.price, pending: -product.price },
        });
        //                         seller
        const sellerWallet = doc.payment.product.user.wallet;
        await Wallet.findByIdAndUpdate(sellerWallet.id, {
            $inc: { total: product.price }
        });
        next();
    }
});
const Delivery = model<DeliveryDoc, DeliveryModel>("Delivery", deliverySchema);
export default Delivery;