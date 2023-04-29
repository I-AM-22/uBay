import multer from 'multer';
import AppError from '@utils/appError';
import catchAsync from '@utils/catchAsync';
import { NextFunction, Response, Request } from 'express';
import sharp from 'sharp';
import { Client } from '@rmp135/imgur';
import { settings } from '@config/settings';

const multerStorage = multer.memoryStorage();

const multerFilter: any = (
  req: Request,
  file: Express.Multer.File,
  cb: any
): void => {
  if (file.mimetype.startsWith('image')) cb(null, true);
  else cb(new AppError(400, 'Not an image! Please upload only images.'), false);
};

const upload = multer({ storage: multerStorage, fileFilter: multerFilter });

export const uploadUserPhoto = upload.single('photo');

export const resizeUserImage = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    if (!req.user) return next();
    if (!req.file) return next();

    const pic = await sharp(req.file.buffer)
      .resize(128, 128)
      .toFormat('jpg')
      .jpeg({ quality: 90 })
      .toBuffer();
    // or your client ID
    const client = new Client({
      client_id: settings.IMGUR_CLIENT_ID,
      client_secret: settings.IMGUR_CLIENT_SECRET,
    });
    const response = await client.Image.upload(pic.toString('base64'));
    req.file.filename = response.data.link;
    next();
  }
);