import multer from 'multer';
import AppError from '@utils/appError';
import catchAsync from '@utils/catchAsync';
import { NextFunction, Response, Request } from 'express';
import sharp from 'sharp';
import { Client } from '@rmp135/imgur';
import { settings } from '@config/settings';
import { STATUS_CODE } from '../types/helper.types';

// type FilePhoto
const multerStorage = multer.memoryStorage();

const multerFilter: any = (
  req: Request,
  file: Express.Multer.File,
  cb: any
): void => {
  if (file.mimetype.startsWith('image')) cb(null, true);
  else
    cb(
      new AppError(STATUS_CODE.BAD_REQUEST, [
        {
          path: ['photo'],
          message: 'Not an image! Please upload only images.',
        },
      ]),
      false
    );
};

const upload = multer({ storage: multerStorage, fileFilter: multerFilter });

export const uploadUserPhoto = upload.single('photo');
export const resizeUserImage = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    if (!req.file) return next();

    const pic = await sharp(req.file.buffer)
      .resize(128, 128)
      .toFormat('jpg')
      .jpeg({
        quality: 90,
        chromaSubsampling: '4:4:4',
        progressive: true,
        optimizeCoding: true,
        trellisQuantisation: true,
        overshootDeringing: true,
        optimizeScans: true,
        mozjpeg: true,
        quantisationTable: 0,
      })
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

interface UploadedFiles {
  // photos?: Express.Multer.File[];
  [fieldname: string]: Express.Multer.File[] | undefined;
}

export const uploadProductPhotos = upload.fields([{ name: 'photos' }]);
export const resizeProductPhotos = catchAsync(
  async (
    req: Request & { files: UploadedFiles },
    res: Response,
    next: NextFunction
  ) => {
    if (!req.files || !req.files.photos) return next();
    req.body.photos = [];

    // we are using map to make the data inside the promise.all an array of promises because forEach does not
    const photos = await Promise.all(
      req.files.photos.map(async (e: any) => {
        const response = await resizeAndUpload(e.buffer);
        return response.data.link;
      })
    );
    req.body.photos = photos;
    next();
  }
);

export const resizeAndUpload = async (img: any) => {
  const pic = await sharp(img)
    .resize(800, 600, {
      fit: sharp.fit.cover,
      position: sharp.strategy.entropy,
    })
    .toFormat('jpeg')
    .jpeg({
      quality: 90,
      chromaSubsampling: '4:4:4',
      progressive: true,
      optimizeCoding: true,
      trellisQuantisation: true,
      overshootDeringing: true,
      optimizeScans: true,
      mozjpeg: true,
      quantisationTable: 3,
    })
    .toBuffer();

  const client = new Client({
    client_id: settings.IMGUR_CLIENT_ID,
    client_secret: settings.IMGUR_CLIENT_SECRET,
  });
  const response = await client.Image.upload(pic.toString('base64'));
  return response;
};
