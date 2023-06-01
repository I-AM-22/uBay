import { Model } from 'mongoose';
import { Request, Response, NextFunction } from 'express';
import APIFeatures from '../utils/apiFeatures';
import AppError from '../utils/appError';
import catchAsync from '../utils/catchAsync';
import { STATUS_CODE } from '../types/helper.types';

export const deleteOne = (Model: Model<any>) =>
  catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const doc = await Model.findByIdAndRemove(req.params.id);
    const modelName = `${Model.modelName.toLowerCase()}`;
    if (!doc) {
      return next(
        new AppError(
          STATUS_CODE.NOT_FOUND,
          [],
          `No ${modelName} found with that Id`
        )
      );
    }
    res.status(STATUS_CODE.DELETED).json({ status: 'success', data: null });
  });

export const updateOne = (Model: Model<any>) =>
  catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const doc = await Model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    const modelName = `${Model.modelName.toLowerCase()}`;
    if (!doc) {
      return next(
        new AppError(
          STATUS_CODE.NOT_FOUND,
          [],
          `No ${modelName} found with that Id`
        )
      );
    }
    res.status(STATUS_CODE.SUCCESS).json({
      status: 'success',
      data: doc,
    });
  });

export const createOne = (Model: Model<any>) =>
  catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const newDoc = await Model.create(req.body);

    res.status(STATUS_CODE.CREATED).json({
      status: 'success',
      data: newDoc,
    });
  });

export const getOne = (Model: Model<any>, ...popOptions: Array<any>) =>
  catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const query = Model.findById(req.params.id);
    if (popOptions) query.populate(popOptions);
    const doc = await query;
    const modelName = `${Model.modelName.toLowerCase()}`;

    if (!doc) {
      return next(
        new AppError(STATUS_CODE.NOT_FOUND, [], `No ${modelName} with that Id`)
      );
    }
    res.status(STATUS_CODE.SUCCESS).json({
      status: 'success',
      data: doc,
    });
  });

export const getAll = (Model: Model<any>) =>
  catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    //small hack
    const filter: any = {};
    if (req.params.userId) filter.user = req.params.userId;
    if (req.params.chatId) filter.chat = req.params.chatId;
    if (req.params.categoryId) filter.category = req.params.categoryId;
    const query =
      Model.modelName === 'User'
        ? Model.find({ _id: { $ne: req.user?.id } })
        : Model.find(filter);

    const feature = new APIFeatures(query, req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate()
      .search(req.querySearch);

    // [Model.modelName.toLowerCase() + 's']
    const docs = await feature.query;

    if (req.query.reverse) {
      docs.reverse();
    }
    //Send Response
    res.status(STATUS_CODE.SUCCESS).json({
      status: 'success',
      result: docs.length,
      data: docs,
    });
  });
