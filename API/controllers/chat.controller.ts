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

export const isSeller = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { user, product } = req.body;
  const data: any = {};
  const isSeller = await Product.findOne({
    _id: product,
    user: req.user?.id,
  });

  //Check if the chat creator is the seller or the customer
  if (isSeller) {
    data.seller = req.user?.id;
    data.customer = user;
    data.product = product;
  } else {
    data.seller = user;
    data.customer = req.user?.id;
    data.product = product;
  }
  req.body = data;
  next();
};
export const accessChat = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    // If the chat existed
    const isChat = await Chat.findOne(req.body);
    if (isChat) {
      return res.status(STATUS_CODE.SUCCESS).json({ data: isChat });
    }

    const createdChat = await Chat.create(req.body);
    return res.status(STATUS_CODE.CREATED).json({ chat: createdChat });
  }
);

export const getAllChats = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const chats = await Chat.find({
      $or: [{ customer: req.user?.id }, { seller: req.user?.id }],
    }).sort({
      updatedAt: -1,
    });

    res.status(STATUS_CODE.SUCCESS).json({ result: chats.length, data: chats });
  }
);

export const getChat = getOne(Chat);
export const CreateChat = createOne(Chat);
export const updateChat = updateOne(Chat);
export const deleteChat = deleteOne(Chat);
