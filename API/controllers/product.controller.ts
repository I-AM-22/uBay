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
import AggregateFeatures from '@utils/aggregateFeatures';
import User from '../models/user.model';

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

    if (isBuy == 'false') {
      pipeline = [
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
            localField: 'product.user',
            foreignField: '_id',
            as: 'user',
          },
        },
        {
          $unwind: '$user',
        },
        // {
        //   $lookup: {
        //     from: 'users',
        //     localField: 'payment.customer',
        //     foreignField: '_id',
        //     as: 'customer',
        //   },
        // },
        // {
        //   $unwind: '$customer',
        // },
        // {
        //   $lookup: {
        //     from: 'wallets',
        //     localField: 'customer.wallet',
        //     foreignField: '_id',
        //     as: 'walletCustomer',
        //   },
        // },
        // {
        //   $unwind: '$walletCustomer',
        // },
        {
          $lookup: {
            from: 'wallets',
            localField: 'user.wallet',
            foreignField: '_id',
            as: 'wallet',
          },
        },
        {
          $unwind: '$wallet',
        },
        {
          $match: {
            'product.user': req.user?._id,
          },
        },
        {
          $lookup: {
            from: 'coupons',
            let: { couponIds: '$product.coupons' },
            pipeline: [
              {
                $match: {
                  $expr: {
                    $in: ['$_id', '$$couponIds'],
                  },
                },
              },
            ],
            as: 'product.coupons',
          },
        },
        {
          $addFields: {
            sortField: {
              $switch: {
                branches: [
                  { case: { $eq: ['$delivery_status', 'wait'] }, then: 0 },
                  { case: { $eq: ['$delivery_status', 'seller'] }, then: 1 },
                  { case: { $eq: ['$delivery_status', 'customer'] }, then: 2 },
                ],
                default: 3,
              },
            },
          },
        },
        {
          $sort: { sortField: 1 },
        },
        {
          $replaceRoot: {
            newRoot: {
              delivery_status: '$delivery_status',
              product: {
                'user': {
                  'id': '$user._id',
                  'wallet': '$wallet'
                },
                '_id': '$product._id',
                'title': '$product.title',
                'content': '$product.content',
                'photos': '$product.photos',
                'price': '$product.title',
                'store': '$product.store',
                'discount': '$product.discount',
                'priceAfterDiscount': '$payment.price'
              },
              customer: {
                'id': '$payment.customer',
                // 'wallet': '$walletCustomer'
              }
            },
          },
        },
      ];
    } else {
      pipeline = [
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
            localField: 'product.user',
            foreignField: '_id',
            as: 'user',
          },
        },
        {
          $unwind: '$user',
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
            from: 'wallets',
            localField: 'customer.wallet',
            foreignField: '_id',
            as: 'walletCustomer',
          },
        },
        {
          $unwind: '$walletCustomer',
        },
        // {
        //   $lookup: {
        //     from: 'wallets',
        //     localField: 'user.wallet',
        //     foreignField: '_id',
        //     as: 'wallet',
        //   },
        // },
        // {
        //   $unwind: '$wallet',
        // },
        {
          $match: {
            'payment.customer': req.user?._id,
          },
        },
        {
          $lookup: {
            from: 'coupons',
            let: { couponIds: '$product.coupons' },
            pipeline: [
              {
                $match: {
                  $expr: {
                    $and: [
                      { $in: ['$_id', '$$couponIds'] },
                      { $eq: ['$user', req.user?._id] },
                      {
                        $or: [
                          { $gt: ['$expire', new Date()] },
                          { $eq: ['$expire', null] },
                        ],
                      },
                    ],
                  },
                },
              },
            ],
            as: 'product.coupons',
          },
        },
        {
          $addFields: {
            sortField: {
              $switch: {
                branches: [
                  { case: { $eq: ['$delivery_status', 'seller'] }, then: 0 },
                  { case: { $eq: ['$delivery_status', 'customer'] }, then: 1 },
                  { case: { $eq: ['$delivery_status', 'wait'] }, then: 2 },
                ],
                default: 3,
              },
            },
          },
        },
        {
          $sort: { sortField: 1 },
        },
        {
          $replaceRoot: {
            newRoot: {
              delivery_status: '$delivery_status',
              product: {
                'user': {
                  'id': '$user._id',
                  // 'wallet': '$wallet'
                },
                '_id': '$product._id',
                'title': '$product.title',
                'content': '$product.content',
                'photos': '$product.photos',
                'price': '$product.title',
                'store': '$product.store',
                'discount': '$product.discount',
                'priceAfterDiscount': '$payment.price'
              },
              customer: {
                'id': '$customer._id',
                'wallet': '$walletCustomer'
              }
            },
          },
        },
      ];
    }
    // Execute the aggregation pipeline
    const products = await Delivery.aggregate(pipeline);
    res.status(STATUS_CODE.SUCCESS).json(products);
  }
);

export const checkProductIsPaid = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;
    const productDoc = await Product.findById(id);
    if (productDoc?.is_paid) {
      return next(
        new AppError(STATUS_CODE.BAD_REQUEST, [], 'لا يمكنك تعديل منتج تم بيعه')
      );
    }
    next();
  }
);

export const filterCoupon = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    next();
  }
);
export const checkIsOwnerProduct = checkIsOwner(Product);
export const getAllProducts = getAll(Product);
export const getProduct = getOne(Product);
export const createProduct = createOne(Product);
export const updateProduct = updateOne(Product);
export const deleteProduct = deleteOne(Product);
export const getAllPros = catchAsync(
  async (req: any, res: Response, next: NextFunction) => {
    const user: Express.User = req.user; // User's ObjectId
    const aggregateFeatures = new AggregateFeatures(req.query);

    aggregateFeatures
      .match({})
      .lookup({
        from: 'categories', // The collection to join with
        localField: 'category', // Field from the main collection
        foreignField: '_id', // Field from the joined collection
        as: 'category', // Alias for the joined data
      })
      .lookup({
        from: 'coupons', // The collection to join with
        localField: 'coupons', // Field from the main collection
        foreignField: '_id', // Field from the joined collection
        as: 'coupons', // Alias for the joined data
      })
      .lookup({
        from: 'users', // The collection to join with
        localField: 'user', // Field from the main collection
        foreignField: '_id', // Field from the joined collection
        as: 'user', // Alias for the joined data
      })
      .lookup({
        from: 'stores', // The collection to join with
        localField: 'store', // Field from the main collection
        foreignField: '_id', // Field from the joined collection
        as: 'store', // Alias for the joined data
      })
      .unwind('$category') // Unwind the category data array
      .unwind('$user') // Unwind the user data array
      .unwind('$store') // Unwind the store data array
      .addFields({
        sortField: {
          $switch: {
            branches: [
              {
                case: {
                  $and: [
                    { $in: ['$category._id', user?.favoriteCategories] },
                    { $in: ['$store.city', user.favoriteCities] },
                  ],
                },
                then: 0,
              },
              {
                case: {
                  $or: [
                    { $in: ['$category._id', user?.favoriteCategories] },
                    { $in: ['$store.city', user.favoriteCities] },
                  ],
                },
                then: 1,
              },
            ],
            default: 2,
          },
        },
      }) // Add fields stage
      .sort({ sortField: 1 }) // Sort stage
      .unset('sortField') //S Unset stage
      .filter('store.city')
      .addFields({
        likes: { $size: '$likedBy' },
      })
      .project({
        title: 1,
        content: 1,
        user: { photo: 1, name: 1, _id: 1, id: 1 },
        coupons: {
          _id: 1,
          user: {
            _id: 1,
            name: 1,
            photo: 1,
            id: 1,
          },
          expire: 1,
          discount: 1,
          active: 1,
          createdAt: 1,
          updatedAt: 1,
        },
        likes: 1,
        photos: 1,
        price: 1,
        category: { name: 1, description: 1, _id: 1, id: 1 },
        _id: 1,
        is_paid: 1,
        createdAt: 1,
        updatedAt: 1,
        id: 1,
        likedBy: 1,
        likedByMe: 1,
        comments: 1,
      }) // Project stage
      .addFields({
        likedByMe: {
          $switch: {
            branches: [
              {
                case: {
                  $in: [user._id, '$likedBy'],
                },
                then: true,
              },
            ],
            default: false,
          },
        },
      })
      .facet(); // Facet stage

    let result = await aggregateFeatures.build(Product);
    res.status(200).json(result);
  }
);
