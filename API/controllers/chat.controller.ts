import { Request, Response, NextFunction } from 'express';
import catchAsync from '@utils/catchAsync';
import Chat from '@models/chat.model';
import AppError from '@utils/appError';

import {
  createOne,
  getOne,
  deleteOne,
  updateOne,
} from '@controllers/handlerFactory';
import Product from '@models/product.model';
import { STATUS_CODE } from '../types/helper.types';

export const accessChat = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { userId, productId } = req.body;
    if (!userId || !productId)
      return next(
        new AppError(
          400,
          'please provide userId and productId with the request'
        )
      );

    const data: any = {};
    const product = await Product.findOne({
      _id: productId,
      user: req.user?._id,
    });

    //Check if the chat creator is the seller or the customer
    if (product) {
      data.seller = req.user?._id;
      data.customer = userId;
      data.product = productId;
    } else {
      data.seller = userId;
      data.customer = req.user?._id;
      data.product = productId;
    }

    // If the chat existed
    const isChat = await Chat.findOne(data);
    if (isChat) {
      return res
        .status(STATUS_CODE.SUCCESS)
        .json({ status: 'success', data: isChat });
    }

    const createdChat = await Chat.create(data);
    res
      .status(STATUS_CODE.CREATED)
      .json({ status: 'success', data: createdChat });
  }
);

export const getAllChats = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    // const chats = await Chat.find({
    // }).sort({ updatedAt: -1 });
    // res
    //   .status(STATUS_CODE.SUCCESS)
    //   .json({ status: 'success', result: chats.length, data: chats });
  }
);

export const getChat = getOne(Chat);
export const CreateChat = createOne(Chat);
export const updateChat = updateOne(Chat);
export const deleteChat = deleteOne(Chat);
