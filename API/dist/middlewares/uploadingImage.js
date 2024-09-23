"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resizeAndUpload = exports.resizeProductPhotos = exports.uploadProductPhotos = exports.resizeUserImage = exports.uploadUserPhoto = void 0;
const multer = require("multer");
const appError_1 = require("@utils/appError");
const catchAsync_1 = require("@utils/catchAsync");
const sharp = require("sharp");
const imgur_1 = require("@rmp135/imgur");
const settings_1 = require("@config/settings");
const helper_types_1 = require("../types/helper.types");
const multerStorage = multer.memoryStorage();
const multerFilter = (req, file, cb) => {
    if (file.mimetype.startsWith('image'))
        cb(null, true);
    else
        cb(new appError_1.default(helper_types_1.STATUS_CODE.BAD_REQUEST, [
            {
                path: ['photo'],
                message: 'Not an image! Please upload only images.',
            },
        ]), false);
};
const upload = multer({ storage: multerStorage, fileFilter: multerFilter });
exports.uploadUserPhoto = upload.single('photo');
exports.resizeUserImage = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.file)
        return next();
    const pic = yield sharp(req.file.buffer)
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
    const client = new imgur_1.Client({
        client_id: settings_1.settings.IMGUR_CLIENT_ID,
        client_secret: settings_1.settings.IMGUR_CLIENT_SECRET,
    });
    const response = yield client.Image.upload(pic.toString('base64'));
    req.file.filename = response.data.link;
    next();
}));
exports.uploadProductPhotos = upload.fields([{ name: 'photos' }]);
exports.resizeProductPhotos = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.files || !req.files.photos)
        return next();
    req.body.photos = [];
    const photos = yield Promise.all(req.files.photos.map((e) => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, exports.resizeAndUpload)(e.buffer);
        return response.data.link;
    })));
    req.body.photos = photos;
    next();
}));
const resizeAndUpload = (img) => __awaiter(void 0, void 0, void 0, function* () {
    const pic = yield sharp(img)
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
    const client = new imgur_1.Client({
        client_id: settings_1.settings.IMGUR_CLIENT_ID,
        client_secret: settings_1.settings.IMGUR_CLIENT_SECRET,
    });
    const response = yield client.Image.upload(pic.toString('base64'));
    return response;
});
exports.resizeAndUpload = resizeAndUpload;
//# sourceMappingURL=uploadingImage.js.map