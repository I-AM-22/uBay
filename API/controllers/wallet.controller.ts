import Wallet from '@models/wallet.model';
import AppError from '@utils/appError';
import catchAsync from '@utils/catchAsync';
import { NextFunction, Request, Response } from 'express';
import { STATUS_CODE } from './../types/helper.types';
import User from '@models/user.model';
import { getAll } from './handlerFactory';

export const chargeMyWallet = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { amount, userId } = req.body; // Assuming the request body contains the user ID and the amount to charge
    // Find the wallet associated with the user
    const wallet = await Wallet.findOneAndUpdate(
      { user: userId },
      {
        $inc: { total: amount },
      },
      { new: true }
    );
    if (!wallet) {
      return next(new AppError(404, [], 'Wallet not found'));
    }
    return res.status(STATUS_CODE.SUCCESS).json(wallet);
  }
);
export const getAllWallets = getAll(Wallet);
