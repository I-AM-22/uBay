import Employee from '@models/employee.model';
import Product from '@models/product.model';
import User from '@models/user.model';
import catchAsync from '@utils/catchAsync';
import { NextFunction, Request, Response } from 'express-serve-static-core';
import { STATUS_CODE } from './../types/helper.types';
import Store from '@models/store.model';
import Comment from '@models/comment.model';
import Delivery from '@models/delivery.model';

export const getStatistics = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const users = await User.countDocuments({ role: 'user' });
    const products = await Product.countDocuments({});
    const employees = await Employee.countDocuments();
    const stores = await Store.countDocuments();
    const soldProducts = await Product.countDocuments({ is_paid: true });
    const salesPercentage = (soldProducts / products) * 100;
    const salesPerCategory = await Product.aggregate([
      { $match: { is_paid: true } },

      {
        $group: {
          _id: '$category',
          categoryCount: { $sum: 1 },
          avgPrice: { $avg: '$price' },
          minPrice: { $min: '$price' },
          maxPrice: { $max: '$price' },
        },
      },
      {
        $project: {
          category: '$_id',
          _id: 0,
          categoryCount: 1,
          avgPrice: 1,
          minPrice: 1,
          maxPrice: 1,
        },
      },
      {
        $lookup: {
          from: 'categories',
          localField: 'category',
          foreignField: '_id',
          as: 'categoryDetails',
        },
      },
      {
        $unwind: '$categoryDetails',
      },
      {
        $addFields: {
          categoryName: '$categoryDetails.name', // Replace with the actual field containing the category name
        },
      },

      {
        $unset: ['categoryDetails', '_id', 'category'],
      },

      {
        $addFields: {
          categoryPercentage: {
            $multiply: [{ $divide: ['$categoryCount', soldProducts] }, 100],
          },
        },
      },
    ]);

    const commentsCountByDay = await Comment.aggregate([
      {
        $group: {
          _id: {
            $dateToString: { format: '%Y-%m-%d', date: '$createdAt' },
          },
          count: { $sum: 1 },
        },
      },
    ]);

    const productsCountByDay = await Product.aggregate([
      { $match: {} },
      {
        $group: {
          _id: {
            $dateToString: { format: '%Y-%m-%d', date: '$createdAt' },
          },
          count: { $sum: 1 },
        },
      },
    ]);

    const deliveriesCountByDay = await Delivery.aggregate([
      {
        $match: { delivery_status: 'customer' },
      },
      {
        $group: {
          _id: {
            $dateToString: { format: '%Y-%m-%d', date: '$createdAt' },
          },
          count: { $sum: 1 },
        },
      },
    ]);

    // Call the function to retrieve the counts
    res.status(STATUS_CODE.SUCCESS).json({
      users,
      employees,
      stores,
      products,
      soldProducts,
      salesPercentage,
      salesPerCategory,
      countByDay: {
        commentsCountByDay,
        productsCountByDay,
        deliveriesCountByDay,
      },
    });
  }
);
