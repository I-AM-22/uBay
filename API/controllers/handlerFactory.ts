import { Document, Model } from 'mongoose';
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

export const deleteOne = (Model: any): RequestHandler =>
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
    if (req.file?.filename) body.photo = req.file.filename;
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
    res.status(STATUS_CODE.SUCCESS).json(doc);
  });

/**
 * Creates a new document of the specified model.
 * @param {Model<Document>} Model - The Mongoose model.
 * @returns {RequestHandler} - Express middleware function.
 */
export const createOne = (Model: Model<any>, addFiled?: any): RequestHandler =>
  catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    if (addFiled) req.body = { ...req.body, ...addFiled };
    //if there any photo to save them
    if (req.file?.filename) req.body.photo = req.file.filename;
    const newDoc = await Model.create(req.body);
    res.status(STATUS_CODE.CREATED).json(newDoc);
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
    res.status(STATUS_CODE.SUCCESS).json(doc);
  });

/**
 * Retrieves all documents of the specified model.
 * @param {Model<Document>} Model - The Mongoose model.
 * @returns {RequestHandler} - Express middleware function.
 */
export const getAll = (Model: any, path?: string): RequestHandler =>
  catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    let query = Model.find();
    let counter = Model.find();

    if (req.params.userId) {
      query = query.where('user').equals(req.params.userId);
      counter = counter.where('user').equals(req.params.userId);
    }
    if (req.params.chatId) {
      query = query.where('chat').equals(req.params.chatId);
      counter = counter.where('chat').equals(req.params.chatId);
    }
    if (req.params.categoryId) {
      query = query.where('category').equals(req.params.categoryId);
      counter = counter.where('category').equals(req.params.categoryId);
    }
    if (req.params.productId) {
      query = query.where('product').equals(req.params.productId);
      counter = counter.where('product').equals(req.params.productId);
    }
    if (Model.modelName === 'User') {
      const { filter, select } = Model.filter(path, req.user);
      query = query.find(filter).select(select);
      counter = counter.where(filter);
    }

    const countFeature = new APIFeatures(counter, req.query).filter();
    const feature = new APIFeatures(query, req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate()
      .search();

    const docs = await feature.query;
    const totalDataCount = (await countFeature.query).length;

    let result: any = { totalDataCount, data: docs };

    if (req.query.page) {
      const totalPages = Math.ceil(totalDataCount / Number(req.query.limit));
      result = {
        pageNumber: +req.query.page,
        totalPages,
        ...result,
      };
    }

    res.status(STATUS_CODE.SUCCESS).json(result);
  });

