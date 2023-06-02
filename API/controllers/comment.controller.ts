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

export const checkIsOwnerComment = checkIsOwner(Comment);
export const getAllComments = getAll(Comment);
export const getComment = getOne(Comment);
export const createComment = createOne(Comment);
export const updateComment = updateOne(Comment);
export const deleteComment = deleteOne(Comment);
