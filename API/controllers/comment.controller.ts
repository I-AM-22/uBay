import Comment from '@models/comment.model';
import {
  createOne,
  deleteOne,
  getAll,
  getOne,
  updateOne,
} from '@controllers/handlerFactory';
import { NextFunction, Request, Response } from 'express';
import { checkIsOwner } from '@middlewares/helper.middleware';

export const setProductAndUserIds = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  //Allow Nested Routes
  if (!req.body.product) req.body.product = req.params.productId;
  if (!req.body.user) req.body.user = req.user?.id;
  next();
};

export const checkIsOwnerComment = checkIsOwner(Comment);
export const getAllComments = getAll(Comment);
export const getComment = getOne(Comment);
export const createComment = createOne(Comment);
export const updateComment = updateOne(Comment);
export const deleteComment = deleteOne(Comment);
