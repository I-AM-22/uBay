import Payment from '@models/payment.models';
import {
    deleteOne,
    getAll,
    getOne,
} from '@controllers/handlerFactory';
import catchAsync from '@utils/catchAsync';
import { NextFunction, Request, Response } from 'express';
import Reservation from '@models/reservation.models';
import { STATUS_CODE } from "../types/helper.types";
import Product from '@models/product.model';
import AppError from '@utils/appError';
export const getAllPayment = getAll(Payment);
export const getPayment = getOne(Payment);
export const deletePayment = deleteOne(Payment);

export const createPayment = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    //take fields to payment from req.body
    const { product } = req.body;
    const payment = { customer: req.user, product };
    const proDoc = await Product.findById(product);

    //check if customer has enough wallet
    const walletDoc = payment.customer?.wallet;
    if (!walletDoc || !proDoc || walletDoc.available < proDoc?.price) {
        return next(new AppError(STATUS_CODE.BAD_REQUEST, [], 'يرجى شحن حسابك قبل عملية شراء المنتج'));
    }
    const paymentDoc = await Payment.create(payment);

    //add fields to reservation req.body
    const { note } = req.body;
    const payment_amount = proDoc.price;
    const reservation = { payment_amount, note, payment: paymentDoc._id };
    const reservationDoc = await Reservation.create(reservation);

    res.status(STATUS_CODE.CREATED).json({
        'payment': paymentDoc,
        'reservation': reservationDoc
    });

});
