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
import AggregateFeatures from '@utils/aggregateFeatures';
import mongoose, { Types } from 'mongoose';

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
    let unpaid: any;
    if (isBuy == 'false') {
      unpaid = await Product.aggregate([
        { $match: { is_paid: false, user: req.user?._id } },
        {
          $lookup: {
            from: 'coupons',
            localField: 'coupons',
            foreignField: '_id',
            as: 'coupons',
          },
        },

        {
          $unwind: { path: '$coupons', preserveNullAndEmptyArrays: true }, // Unwind the coupons array
        },
        {
          $lookup: {
            from: 'users',
            localField: 'coupons.user',
            foreignField: '_id',
            as: 'coupons.user',
          },
        },
        {
          $unwind: { path: '$coupons.user', preserveNullAndEmptyArrays: true }, // Unwind the userDetails array
        },
        {
          $group: {
            _id: '$_id',
            title: { $first: '$title' },
            photos: { $first: '$photos' },
            price: { $first: '$price' },
            category: { $first: '$category' },
            store: { $first: '$store' },
            coupons: {
              $push: {
                $cond: {
                  if: { $eq: ['$coupons', {}] }, // Check if coupons field is empty object
                  then: '$$REMOVE', // If empty, remove the field
                  else: {
                    _id: '$coupons._id',
                    expire: '$coupons.expire',
                    discount: '$coupons.discount',
                    active: '$coupons.active',
                    user: '$coupons.userDetails',
                  },
                },
              },
            },
          },
        },
        {
          $project: {
            _id: 1,
            title: 1,
            price: 1,
            photos: 1,
            category: 1,
            store: 1,
            coupons: {
              _id: 1,
              user: { _id: 1, name: 1, photo: 1 },
              expire: 1,
              active: 1,
              discount: 1,
            },
          },
        },
      ]);
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
            as: 'product.user',
          },
        },
        {
          $unwind: '$product.user',
        },
        {
          $lookup: {
            from: 'wallets',
            localField: 'product.user.wallet',
            foreignField: '_id',
            as: 'product.user.wallet',
          },
        },
        {
          $unwind: '$product.user.wallet',
        },
        {
          $match: {
            'product.user._id': req.user?._id,
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
          $project: {
            _id: 1,
            payment: {
              _id: 1,
              price_after: '$payment.price',
              is_discount: 1,
              createdAt: 1,
            },
            customer: { name: 1, _id: 1, photo: 1 },
            createdAt: 1,
            customer_date: 1,
            seller_date: 1,
            delivery_status: 1,
            product: {
              _id: 1,
              title: 1,
              price: 1,
              photos: 1,
              category: 1,
              store: 1,
            },
          },
        },
        {
          $facet: {
            wait: [
              { $match: { delivery_status: 'wait' } },
              { $unset: 'delivery_status' },
            ],
            seller: [
              { $match: { delivery_status: 'seller' } },
              { $unset: 'delivery_status' },
            ],
            customer: [
              { $match: { delivery_status: 'customer' } },
              { $unset: 'delivery_status' },
            ],
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
            as: 'seller',
          },
        },
        {
          $unwind: { path: '$seller', preserveNullAndEmptyArrays: true }, // Unwind the userDetails array
        },
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
                      {
                        $eq: [
                          '$user',
                          new mongoose.Types.ObjectId(req.user?.id),
                        ],
                      },
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
          $project: {
            _id: 1,
            payment: {
              _id: 1,
              price_after: '$payment.price',
              is_discount: 1,
              createdAt: 1,
            },
            seller: { name: 1, _id: 1, photo: 1 },
            createdAt: 1,
            customer_date: 1,
            seller_date: 1,
            product: {
              _id: 1,
              title: 1,
              price: 1,
              photos: 1,
              category: 1,
              store: 1,
              coupons: 1,
            },
            delivery_status: 1,
          },
        },
        {
          $facet: {
            wait: [
              { $match: { delivery_status: 'wait' } },
              { $unset: 'delivery_status' },
            ],
            seller: [
              { $match: { delivery_status: 'seller' } },
              { $unset: 'delivery_status' },
            ],
            customer: [
              { $match: { delivery_status: 'customer' } },
              { $unset: 'delivery_status' },
            ],
          },
        },
      ];
    }
    // Execute the aggregation pipeline
    const products = await Delivery.aggregate(pipeline);

    res.status(STATUS_CODE.SUCCESS).json({ ...products[0], unpaid });
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
    let doc = req.body.doc;
    doc.coupons = doc.coupons.filter(
      (coupon: { user: { _id: { toString: () => any } | null } }) => {
        return (
          coupon.user !== null &&
          coupon.user._id !== null &&
          coupon.user._id.toString() === req.user?._id.toString()
        );
      }
    );
    res.status(STATUS_CODE.SUCCESS).json(doc);
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
      // .lookup({
      //   from: 'coupons', // The collection to join with
      //   localField: 'coupons', // Field from the main collection
      //   foreignField: '_id', // Field from the joined collection
      //   as: 'coupons', // Alias for the joined data
      // })
      .lookup({
        from: 'coupons',
        let: { couponIds: '$coupons' }, //index
        pipeline: [
          {
            $match: {
              $expr: {
                $and: [
                  { $in: ['$_id', '$$couponIds'] },
                  { $eq: ['$user', new mongoose.Types.ObjectId(req.user?.id)] },
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
        as: 'coupons',
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
      .lookup({
        from: 'cities', // The collection to join with
        localField: 'store.city', // Field from the main collection
        foreignField: '_id', // Field from the joined collection
        as: 'store.city', // Alias for the joined data
      })
      .unwind('$store.city') // Unwind the city data array
      .match({ 'user.active': { $ne: false } })
      .search()
      .sort({ createdAt: -1 })
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
      })
      .group({
        _id: { $dateToString: { format: '%Y-%m-%d', date: '$createdAt' } },
        docs: {
          $push: '$$ROOT',
        },
      })
      .unwind('$docs') // Unwind the docs array
      .sort({ 'docs.sortField': 1 })
      // Sort by the sortField within each doc
      .group({
        _id: '$_id',
        docs: { $push: '$docs' }, // Group the docs back into an array
      })
      .sort({ _id: -1 })
      .group({
        _id: null, // Grouping everything into a single document
        combinedDocs: { $push: '$docs' },
      })
      .addFields({
        combinedDocs: {
          $reduce: {
            input: '$combinedDocs',
            initialValue: [],
            in: { $concatArrays: ['$$value', '$$this'] },
          },
        },
      })
      .unwind('$combinedDocs')
      .replaceRoot({
        newRoot: '$combinedDocs',
      })
      .filter('store.city')
      .addFields({
        likes: { $size: '$likedBy' },
      })
      .project({
        title: 1,
        content: 1,
        user: { photo: 1, name: 1, _id: 1, id: 1 },
        coupons: 1,
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
        store: {
          _id: 1,
          name: 1,
          city: {
            _id: 1,
            name: 1
          }
        }
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
