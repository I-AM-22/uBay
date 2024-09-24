import * as multer from 'multer';
import AppError from '@utils/appError';
import catchAsync from '@utils/catchAsync';
import { NextFunction, Response, Request } from 'express';
import * as sharp from 'sharp';
import { STATUS_CODE } from '../types/helper.types';
import { cloudinaryService } from '@utils/cloudinary';

// type FilePhoto
const multerStorage = multer.memoryStorage();

const multerFilter: any = (req: any, file: any, cb: any): void => {
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
  async (req: any, res: Response, next: NextFunction) => {
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

    const response = await cloudinaryService.uploadPhoto(pic);
    req.file.filename = response.url;
    next();
  }
);

interface UploadedFiles {
  // photos?: Express.Multer.File[];
  [fieldname: string]: any[] | undefined;
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

    const photos = await Promise.all(
      req.files.photos.map(async (e: any) => {
        const response = await resizeAndUpload(e.buffer);
        return response.url;
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

  const response = await cloudinaryService.uploadPhoto(pic);
  return response;
};
