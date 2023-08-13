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
import Store from '@models/store.model';
import Employee from '@models/employee.model';

export const getAllDeliveries = getAll(Delivery);
export const getDelivery = getOne(Delivery);


export const receive = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const { payment, status } = req.body

    let delivDoc = await Delivery.findOne({ payment: payment }).populate('payment');
    let storeID = (await Employee.findOne({ _id: req.user?.id }))?.store?.id;

    if (!delivDoc) {
        return next(new AppError(STATUS_CODE.BAD_REQUEST, [], 'هذا المنتج غير موجود بالمستودع'));// Handle the case where the delivery document is not found
    }

    //to check if he goes to the right store
    if (storeID != delivDoc.payment.product.store._id) {
        const storeDoc = await Store.findById(delivDoc.payment.product.store);
        return next(new AppError(STATUS_CODE.BAD_REQUEST, [], `هذا المنتج غير موجود في هذا المستودع يجب الذهاب الى  مستودع ${storeDoc?.name} في العنوان ${storeDoc?.address}`));
    }
    const employee: any = req.user?.id;
    //to check for seller if he comes 
    if (status == 0) {
        //to prevent repeate data receive
        if (delivDoc.delivery_status != "wait") {
            return next(new AppError(STATUS_CODE.BAD_REQUEST, [],"هذا المنتج تم تسليمه من قبل" ));
        }
        const time: any = new Date();
        delivDoc.seller_date = time;
        delivDoc.delivery_status = "seller";
        delivDoc.employee_seller = employee;
        delivDoc.store = storeID;

        delivDoc = await delivDoc.save();
    }
    //to check for buyer to take his product
    else if (status == 1) {
        if (delivDoc.delivery_status == "wait") {
            return next(new AppError(STATUS_CODE.BAD_REQUEST, [],'هذا المنتج ليس ضمن مستودع'));

        }
        if (delivDoc.delivery_status == "customer") {
            return next(new AppError(STATUS_CODE.BAD_REQUEST, [],'لقد تم تسليمك هذا المنتج رجاء التأكد من رمز التوليد'));
        }
        const time: any = new Date();
        delivDoc.customer_date = time;
        delivDoc.delivery_status = "customer";
        delivDoc.employee_customer = employee;
        delivDoc = await delivDoc.save();
    }

    return res.status(STATUS_CODE.SUCCESS).json(delivDoc);
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

