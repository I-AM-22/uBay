// @desc    Get list of coupons
// @route   GET /api/v1/coupons

import Coupon from '@models/coupon.model';
import {
  createOne,
  deleteOne,
  getAll,
  getOne,
  updateOne,
} from './handlerFactory';
import catchAsync from '@utils/catchAsync';
import { NextFunction, Request, Response } from 'express';
import Product from '@models/product.model';
import { STATUS_CODE } from './../types/helper.types';
import AppError from '@utils/appError';

export const isProductOwner = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const product = await Product.findOne({
      _id: req.body.product,
      user: req.body.user,
    });
    if (!product)
      return next(
        new AppError(
          STATUS_CODE.FORBIDDEN,
          [],
          'You are not authorized to perform this action'
        )
      );

    next();
  }
);
// @access  Private/Admin-Manager
export const getCoupons = getAll(Coupon);

// @desc    Get specific coupon by id
// @route   GET /api/v1/coupons/:id
// @access  Private/Admin-Manager
export const getCoupon = getOne(Coupon);

// @desc    Create coupon
// @route   POST  /api/v1/coupons
// @access  Private/Admin-Manager
export const createCoupon = createOne(Coupon);

// @desc    Update specific coupon
// @route   PUT /api/v1/coupons/:id
// @access  Private/Admin-Manager
export const updateCoupon = updateOne(Coupon);

// @desc    Delete specific coupon
// @route   DELETE /api/v1/coupons/:id
// @access  Private/Admin-Manager
export const deleteCoupon = deleteOne(Coupon);
