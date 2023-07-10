import {
    createOne,
    deleteOne,
    getAll,
    getOne,
    updateOne,
} from '@controllers/handlerFactory';
import Delivery from '@models/delivery.model';
import { NextFunction, Request, Response } from 'express';
import catchAsync from '@utils/catchAsync';
import { STATUS_CODE } from '../types/helper.types';
import Payment from '@models/payment.models';
import Product from '@models/product.model';
import AppError from '@utils/appError';

export const getAllDeliveries = getAll(Delivery);
export const getDelivery = getOne(Delivery);


export const receive = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const { payment, status } = req.body;

    let delivDoc = (await Delivery.find({ payment: payment }))[0];
    if (!delivDoc) {
        throw new Error('Delivery not found'); // Handle the case where the delivery document is not found
    }

    const employee: any = req.user?.id;

    if (status == 0) {
        const time: any = new Date();
        delivDoc.seller_date = time;
        res.status(200).json(delivDoc);
        delivDoc.delivery_status = "seller";
        delivDoc.employee_seller = employee;

        delivDoc = await delivDoc.save();
    }
    else if (status == 1) {
        const time: any = new Date();
        delivDoc.customer_date = time;
        delivDoc.delivery_status = "customer";
        delivDoc.employee_customer = employee;
        delivDoc = await delivDoc.save();
    }

    res.status(STATUS_CODE.SUCCESS).json(delivDoc);
});

export const generateQrForSeller = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const { product } = req.body;
    const productDoc = await Product.findById(product);

    if (!productDoc || productDoc.user.id != req.user?.id) {
        return next(new AppError(STATUS_CODE.BAD_REQUEST, [], 'انت لست مالك هذا المنتج'));
    }
    const paymentDoc = (await Payment.find({ product: product }))[0];
    res.status(STATUS_CODE.SUCCESS).json({
        payment: paymentDoc.id,
        status: 0
    });
});

export const generateQrForCustomer = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const { product } = req.body;
    const paymentDoc = (await Payment.find({ product: product }))[0];
    if (!paymentDoc || paymentDoc.customer.id != req.user?.id) {
        return next(new AppError(STATUS_CODE.BAD_REQUEST, [], 'قم بشراء المنتج اولا'));
    }
    res.status(STATUS_CODE.SUCCESS).json({
        payment: paymentDoc.id,
        status: 1
    });
});