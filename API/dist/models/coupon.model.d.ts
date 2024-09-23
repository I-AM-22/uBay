import { Schema, Types } from 'mongoose';
import { CouponDoc, CouponModel, ICoupon } from 'types/coupon.types';
declare const Coupon: import("mongoose").Model<CouponDoc, {}, any, {}, import("mongoose").Document<unknown, {}, CouponDoc> & Omit<ICoupon & import("mongoose").Document<any, any, any> & {
    _id: Types.ObjectId;
}, never>, Schema<CouponDoc, CouponModel, any, {}, {}, {}, import("mongoose").DefaultSchemaOptions, CouponDoc, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<CouponDoc>> & Omit<import("mongoose").FlatRecord<CouponDoc> & {
    _id: Types.ObjectId;
}, never>>>;
export default Coupon;
