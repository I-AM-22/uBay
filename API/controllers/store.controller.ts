import { NextFunction, Request, Response } from 'express';
import {
  createOne,
  deleteOne,
  getAll,
  getOne,
  updateOne,
} from '@controllers/handlerFactory';
import Store from '@models/store.model';
import AppError from '@utils/appError';
import catchAsync from '@utils/catchAsync';
import { STATUS_CODE } from '../types/helper.types';
import Delivery from '@models/delivery.model';
import mongoose from 'mongoose';

export const getAllStores = getAll(Store);
export const getStore = getOne(Store);
export const createStore = createOne(Store);
export const updateStore = updateOne(Store);
export const deleteStore = deleteOne(Store);

export const getAllproductInstore = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const { storeID } = req.params;
  let pipeline: any = [
    {
      $match: {
        'delivery_status': 'seller',
        'store': new mongoose.Types.ObjectId(storeID)
      }
    },
    {
      $lookup: {
        from: 'payments',
        localField: 'payment',
        foreignField: '_id',
        as: 'payment'
      }
    },
    {
      $unwind: '$payment'
    },
    {
      $lookup: {
        from: 'products',
        localField: 'payment.product',
        foreignField: '_id',
        as: 'product'
      }
    },
    {
      $unwind: '$product'
    },
    {
      $lookup: {
        from: 'employees',
        localField: 'employee_seller',
        foreignField: '_id',
        as: 'employee_seller'
      }
    },
    {
      $unwind: '$product'
    },
    {
      $replaceRoot: {
        newRoot: {
          product: '$product',
          employee: {
            _id: { $arrayElemAt: ['$employee_seller._id', 0] },
            name: { $arrayElemAt: ['$employee_seller.name', 0] },
            email: { $arrayElemAt: ['$employee_seller.email', 0] },
          },
        }
      }
    }
  ];
  const products = await Delivery.aggregate(pipeline);


  res.status(STATUS_CODE.SUCCESS).json({
    Product: products,
  });
});
