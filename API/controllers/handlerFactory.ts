import { Model } from 'mongoose';
import { Request, Response, NextFunction } from 'express';
import APIFeatures from '../utils/apiFeatures';
import AppError from '../utils/appError';
import catchAsync from '../utils/catchAsync';

export const deleteOne = (Model: Model<any>) =>
  catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const doc = await Model.findByIdAndRemove(req.params.id);
    const modelName = `${Model.modelName.toLowerCase()}`;
    if (!doc) {
      return next(new AppError(404, `No ${modelName} found with that ID`));
    }
    res.status(204).json({ status: 'success', data: null });
  });

export const updateOne = (Model: Model<any>) =>
  catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const doc = await Model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    const modelName = `${Model.modelName.toLowerCase()}`;
    if (!doc) {
      return next(new AppError(404, `No ${modelName} found with that ID`));
    }
    res.status(200).json({
      status: 'success',
      data: {
        data: doc,
      },
    });
  });

export const createOne = (Model: Model<any>) =>
  catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const newDoc = await Model.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        data: newDoc,
      },
    });
  });

export const getOne = (Model: Model<any>, ...popOptions: Array<any>) =>
  catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const query = Model.findById(req.params.id);
    if (popOptions) query.populate(popOptions);

    const doc = await query;
    const modelName = `${Model.modelName.toLowerCase()}`;

    if (!doc) {
      return next(new AppError(404, `No ${modelName} with that ID`));
    }
    res.status(200).json({
      status: 'success',
      data: {
        data: doc,
      },
    });
  });

export const getAll = (Model: Model<any>) =>
  catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    //small hack
    const filter: any = {};
    if (req.params.tourId) filter.tour = req.params.tourId;
    if (req.params.userId) filter.user = req.params.userId;
    const feature = new APIFeatures(Model.find(filter), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();

    // const docs = await feature.query.explain();
    const docs = await feature.query;
    //Send Response
    res.status(200).json({
      status: 'success',
      result: docs.length,
      data: {
        data: docs,
      },
    });
  });
