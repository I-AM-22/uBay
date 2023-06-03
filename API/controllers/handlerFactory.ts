import { Model } from 'mongoose';
import { Request, Response, NextFunction, RequestHandler } from 'express';
import APIFeatures from '../utils/apiFeatures';
import AppError from '../utils/appError';
import catchAsync from '../utils/catchAsync';
import { STATUS_CODE } from '../types/helper.types';

/**
 * Deletes a document of the specified model by ID.
 * @param {Model<Document>} Model - The Mongoose model.
 * @returns {RequestHandler} - Express middleware function.
 */

export const deleteOne = (Model: Model<any>): RequestHandler =>
  catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const doc = await Model.findByIdAndRemove(id);
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
    res.sendStatus(STATUS_CODE.DELETED);
  });

/**
 * Updates a document of the specified model by ID.
 * @param {Model<Document>} Model - The Mongoose model.
 * @returns {RequestHandler} - Express middleware function.
 */
export const updateOne = (Model: Model<any>): RequestHandler =>
  catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const { body } = req;

    const doc = await Model.findByIdAndUpdate(id, body, {
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
      data: doc,
    });
  });

/**
 * Creates a new document of the specified model.
 * @param {Model<Document>} Model - The Mongoose model.
 * @returns {RequestHandler} - Express middleware function.
 */
export const createOne = (Model: Model<any>, addFiled?: any): RequestHandler =>
  catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    if (addFiled) req.body = { ...req.body, ...addFiled };
    const newDoc = await Model.create(req.body);

    res.status(STATUS_CODE.CREATED).json({
      data: newDoc,
    });
  });

/**
 * Retrieves a document of the specified model by ID.
 * @param {Model<Document>} Model - The Mongoose model.
 * @param {...any} popOptions - Populate options for related documents.
 * @returns {RequestHandler} - Express middleware function.
 */
export const getOne = (
  Model: Model<any>,
  ...popOptions: Array<any>
): RequestHandler =>
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
      data: doc,
    });
  });

/**
 * Retrieves all documents of the specified model.
 * @param {Model<Document>} Model - The Mongoose model.
 * @returns {RequestHandler} - Express middleware function.
 */
export const getAll = (Model: Model<any>, path?: string): RequestHandler =>
  catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    //small hack
    const filter: any = {};
    if (req.params.userId) filter.user = req.params.userId;
    if (req.params.chatId) filter.chat = req.params.chatId;
    if (req.params.categoryId) filter.category = req.params.categoryId;

    const mName = Model.modelName;
    let counter: any = Model.count({});
    let query = Model.find(filter);

    if (mName === 'User') {
      let fR: any = {
        _id: { $ne: req.user?.id },
      };
      if (path === 'user') {
        fR.role = 'user';
        query.find(fR);
        counter.count({ role: 'user' });
      }
      if (path === 'admin') {
        fR.role = 'admin';
        query.find(fR);
        counter.count({ role: 'admin' });
      }
    }

    const feature = new APIFeatures(query, req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate()
      .search();

    // [Model.modelName.toLowerCase() + 's']
    const docs = await feature.query;
    counter = await counter;
    let result: any = { totalDataCount: docs.length, data: docs };
    if (req.query.page) {
      const totalPages = Math.round(counter / Number(req.query.limit));
      result = {
        pageNumber: +req.query.page,
        totalPages,
        ...result,
      };
    }
    //Send Response
    res.status(STATUS_CODE.SUCCESS).json(result);
  });
