import { DeliveryDoc, DeliveryModel } from "../types/delivery.types";
import { Schema, Types, model } from "mongoose";
import Wallet from "./wallet.model";

const deliverySchema = new Schema<DeliveryDoc, DeliveryModel, any>(
    {
        payment: {
            type: Types.ObjectId,
            unique: true,
            required: true,
            ref: "Payment"
        },
        employee_seller: {
            type: Types.ObjectId,
            ref: "Employee"
        },
        employee_customer: {
            type: Types.ObjectId,
            ref: "Employee"
        },
        delivery_status: {
            type: String,
            enum: ['wait', 'seller', 'customer'],
            default: "wait",
        },
        customer_date: {
            type: Date,
            default: null
        },
        seller_date: {
            type: Date,
            default: null
        }
    }, {
    timestamps: true,
    toJSON: { virtuals: true, versionKey: false },
    toObject: { virtuals: true, versionKey: false },
});

deliverySchema.pre('save', async function (next) {
    //Check if this document not new and this happen after receive customer only
    if (!this.isNew && this.customer_date != null) {
        const doc = await this.populate('payment');
        const product = doc.payment.product;

        // //                          buyer
        const buyerWallet = doc.payment.customer.wallet;
        await Wallet.findByIdAndUpdate(buyerWallet.id, {
            $inc: { total: -product.price, pending: -product.price },
        });

        // //                         seller
        const seller = doc.payment.product.user.id;
         await Wallet.findOneAndUpdate({ user: seller }, { $inc: { total: product.price } });
        next();
    }
});
const Delivery = model<DeliveryDoc, DeliveryModel>("Delivery", deliverySchema);
export default Delivery;