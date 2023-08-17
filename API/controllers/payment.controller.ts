import Payment from '@models/payment.models';
import {
    deleteOne,
    getAll,
    getOne,
} from '@controllers/handlerFactory';
import catchAsync from '@utils/catchAsync';
import { NextFunction, Request, Response } from 'express';
import { STATUS_CODE } from "../types/helper.types";
import Product from '@models/product.model';
import AppError from '@utils/appError';
import Coupon from '@models/coupon.model';
export const getAllPayment = getAll(Payment);
export const getPayment = getOne(Payment);
export const deletePayment = deleteOne(Payment);

export const createPayment = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    //take fields to payment from req.body
    const { product, price, is_discount, couponId } = req.body;
    const payment = { customer: req.user?._id, product, price, is_discount, coupon:couponId };

    //check if customer has enough wallet
    const walletDoc = req.user?.wallet;
    if (!walletDoc || walletDoc.available < req.body.price) {
        return next(new AppError(STATUS_CODE.BAD_REQUEST, [], 'يرجى شحن حسابك قبل عملية شراء المنتج'));
    }
    const paymentDoc = await Payment.create(payment);

    res.status(STATUS_CODE.CREATED).json(paymentDoc);

});

export const hasCoupon = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const couponDoc = await Coupon.findOne({
        user: req.user?.id,
        product: req.body.product,
        expire: { $gte: new Date() }
    });
    const productDoc = await Product.findById(req.body.product);
    if (!productDoc) {
        return next(
            new AppError(
                STATUS_CODE.NOT_FOUND,
                [],
                'There is no product with that Id'
            )
        );
    }
    let discount = 0, is_discount = false, couponId = null;
    if (couponDoc) {
        discount = couponDoc.discount;
        is_discount = true;
        couponId = couponDoc.id;
    }
    let price = productDoc?.price - discount;
    (price < 0) ? price = 0 : price;
    const updatedReqBody = {
        ...req.body, price: price, is_discount: is_discount, couponId
    };
    // Attach the updated object to req.body
    req.body = updatedReqBody;
    next();
});
