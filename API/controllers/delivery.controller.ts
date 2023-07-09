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

export const getAllDeliveries = getAll(Delivery);
export const getDelivery = getOne(Delivery);
export const deleteDelivery = deleteOne(Delivery);

export const createDelivery = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    req.body.employee = req.user;
    const deliveryDoc = await Delivery.create(req.body);
    res.status(STATUS_CODE.CREATED).json(deliveryDoc);
});

export const customer_receipt = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;

    const delivDoc = await Delivery.findById(id);
    if (!delivDoc) {
        throw new Error('Delivery not found'); // Handle the case where the delivery document is not found
    }
    delivDoc.customer_status = true;
    const time: any = new Date();
    delivDoc.customer_receipt = time;
    await delivDoc.save();
    res.status(STATUS_CODE.SUCCESS).json(delivDoc);
});