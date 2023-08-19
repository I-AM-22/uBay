import ProfitPercentage from '@models/ProfitPercentag.model';
import {
    getAll,
} from '@controllers/handlerFactory';
import catchAsync from '@utils/catchAsync';
import { NextFunction, Request, Response } from 'express';
import { STATUS_CODE } from '../types/helper.types';
import Profit from '@models/profit.model';
export const getAllProfit = getAll(Profit);
export const getProfitPercentage = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const percentageDoc=await ProfitPercentage.findOne({});
    res.status(STATUS_CODE.SUCCESS).json(percentageDoc);
});
export const createOrUpdatePercentage = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const percentageDoc =await ProfitPercentage.findOneAndUpdate({}, { value: req.body.value }, {
        // If set to true, returns the updated document instead of the old one
        new: true,
        // If no document is found, create a new one with the given data
        upsert: true,
        // Run Mongoose validators on the update operation
        runValidators: true,
    });
    res.status(STATUS_CODE.SUCCESS).json(percentageDoc);
})
