import Product from '@models/product.model';
import {
  getAll,
  getOne,
  updateOne,
  deleteOne,
  createOne,
} from '@controllers/handlerFactory';
import { NextFunction, Request, Response } from 'express';
import { checkIsOwner } from '@middlewares/auth.middleware';
import catchAsync from '@utils/catchAsync';
import AppError from '@utils/appError';
import { STATUS_CODE } from '../types/helper.types';
import Delivery from '@models/delivery.model';
import APIFeatures from '../utils/apiFeatures';


export const like = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    await Product.findByIdAndUpdate(req.params.id, {
      $addToSet: { likedBy: req.user?._id },
    });
    res.sendStatus(STATUS_CODE.SUCCESS);
  }
);

export const dislike = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      { $pull: { likedBy: req.user?._id } },
      { new: true, runValidators: true }
    );
    if (!product) {
      return next(
        new AppError(STATUS_CODE.NOT_FOUND, [], `No Product found with that ID`)
      );
    }

    res.sendStatus(STATUS_CODE.SUCCESS);
  }
);
    export const myProduct = catchAsync(
      async (req: Request, res: Response, next: NextFunction) => {
        const { isBuy } = req.query;
        let pipeline: any = [];
        
        if (isBuy == "false") {
          pipeline = [
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
              $match: {
                'product.user': req.user?._id
              }
            },
            {
              $addFields: {
                sortField: {
                  $switch: {
                    branches: [
                      { case: { $eq: ['$delivery_status', 'wait'] }, then: 0 },
                      { case: { $eq: ['$delivery_status', 'seller'] }, then: 1 },
                      { case: { $eq: ['$delivery_status', 'customer'] }, then: 2 }
                    ],
                    default: 3
                  }
                }
              }
            },
            {
              $sort: { sortField: 1 }
            },
            {
              $replaceRoot: {
                newRoot: {
                  delivery_status: '$delivery_status',
                  product: '$product',
                }
              }
            }
          ];
        } else {
          pipeline = [
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
              $match: {
                'payment.customer': req.user?._id
              }
            },
            {
              $addFields: {
                sortField: {
                  $switch: {
                    branches: [
                      { case: { $eq: ['$delivery_status', 'seller'] }, then: 0 },
                      { case: { $eq: ['$delivery_status', 'customer'] }, then: 1 },
                      { case: { $eq: ['$delivery_status', 'wait'] }, then: 2 }
                    ],
                    default: 3
                  }
                }
              }
            },
            {
              $sort: { sortField: 1 }
            },
            {
              $replaceRoot: {
                newRoot: {
                  delivery_status: '$delivery_status',
                  product: '$product',
                }
              }
            }
          ];
        }
    // Execute the aggregation pipeline
    const products =await  Delivery.aggregate(pipeline);
        res.status(STATUS_CODE.SUCCESS).json(products);
      }
    );
export const checkIsOwnerProduct = checkIsOwner(Product);
export const getAllProducts = getAll(Product);
export const getProduct = getOne(Product);
export const createProduct = createOne(Product);
export const updateProduct = updateOne(Product);
export const deleteProduct = deleteOne(Product);
