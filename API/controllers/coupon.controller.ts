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
import AppError from '@utils/appError';
import { STATUS_CODE } from './../types/helper.types';
import Product from '@models/product.model';

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

export const removeCouponfromProduct = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const productId = req.body.coupon.product._id;
    await Product.findByIdAndUpdate(productId, {
      $pull: { coupons: req.body.coupon._id },
    });
    next();
  }
);
export const getMyCoupons = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    req.query.user = req.user?.id;
    req.query.expire = { gt: Date.now().toString() };
    next();
  }
);

export const getProductCoupons = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    if (req.params.productId) req.params.id = req.params.productId;
    if (req.body.product) req.params.id = req.body.product;
    next();
  }
);
export const checkProductIspaid = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    if (req.body.coupon.product.is_paid)
      return next(
        new AppError(
          STATUS_CODE.BAD_REQUEST,
          [],
          'لا يمكن تعديل او حذف خصم لمنتج تم بيعه'
        )
      );
    next();
  }
);

export const couponMaker = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const coupon = await Coupon.findById(req.params.id);
    if (!coupon)
      return next(
        new AppError(
          STATUS_CODE.NOT_FOUND,
          [],
          'There is no coupon with that Id'
        )
      );
    if (req.user?.id !== coupon.product.user.id)
      return next(
        new AppError(
          STATUS_CODE.FORBIDDEN,
          [],
          'You are not authorized to perform this action'
        )
      );

    req.body.coupon = coupon;
    next();
  }
);