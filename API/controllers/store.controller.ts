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
import mongoose, { Types } from 'mongoose';

export const getAllStores = getAll(Store);
export const getStore = getOne(Store);
export const createStore = createOne(Store);
export const updateStore = updateOne(Store);
export const deleteStore = deleteOne(Store);

export const getAllproductInstore = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { storeID } = req.params;
    let pipeline: any = [
      {
        $match: {
          delivery_status: 'seller',
          store: new mongoose.Types.ObjectId(storeID),
        },
      },
      {
        $lookup: {
          from: 'payments',
          localField: 'payment',
          foreignField: '_id',
          as: 'payment',
        },
      },
      {
        $unwind: '$payment',
      },
      {
        $lookup: {
          from: 'products',
          localField: 'payment.product',
          foreignField: '_id',
          as: 'product',
        },
      },
      {
        $unwind: '$product',
      },
      {
        $lookup: {
          from: 'users',
          localField: 'payment.customer',
          foreignField: '_id',
          as: 'customer',
        },
      },
      {
        $unwind: '$customer',
      },
      {
        $lookup: {
          from: 'users',
          localField: 'product.user',
          foreignField: '_id',
          as: 'product.user',
        },
      },
      {
        $unwind: '$product.user',
      },
      {
        $lookup: {
          from: 'employees',
          localField: 'employee_seller',
          foreignField: '_id',
          as: 'employee_seller',
        },
      },
      {
        $unwind: { path: '$employee_seller', preserveNullAndEmptyArrays: true }, // Unwind the userDetails array
      },
      {
        $project: {
          Product: {
            _id: '$product._id',
            title: '$product.title',
            content: '$product.content',
            price: '$product.price',
            photos: '$product.photos',
            user: {
              _id: '$product.user._id',
              name: '$product.user.name',
              photo: '$product.user.photo',
            },
            createdAt: '$product.createdAt',
          },
          Customer: {
            _id: '$customer._id',
            name: '$customer.name',
            photo: '$customer.photo',
          },
          Employee: {
            _id: '$employee_seller._id',
            name: '$employee_seller.name',
            photo: '$employee_seller.photo',
          },
        },
      },
    ];
    const products = await Delivery.aggregate(pipeline);

    res.status(STATUS_CODE.SUCCESS).json(products);
  }
);
