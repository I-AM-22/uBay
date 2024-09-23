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
const express_1 = require("express");
const express = require("express");
const path = require("path");
const morgan = require("morgan");
const helmet_1 = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const cookieParser = require("cookie-parser");
const hpp = require("hpp");
const cors = require("cors");
const compression = require("compression");
const error_controller_1 = require("@controllers/error.controller");
const settings_1 = require("./config/settings");
const index_routes_1 = require("@routes/index.routes");
const passport_config_1 = require("@middlewares/passport.config");
const passport = require("passport");
const cls = require("cls-hooked");
const helper_types_1 = require("./types/helper.types");
const app = express();
const namespace = cls.createNamespace('app');
app.use((req, res, next) => {
    namespace.bindEmitter(req);
    namespace.bindEmitter(res);
    namespace.run(() => {
        next();
    });
});
app.use(cors());
app.options('*', cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use((0, helmet_1.default)());
if (settings_1.settings.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}
app
    .route('/health')
    .get((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    return res.status(helper_types_1.STATUS_CODE.SUCCESS).json({ status: 'success' });
}));
app.disable('x-powered-by');
app.use((0, express_1.json)({ limit: '10kb' }));
app.use((0, express_1.urlencoded)({ extended: false }));
app.use(cookieParser());
app.use(mongoSanitize());
app.use(hpp({
    whitelist: [
        'duration',
        'difficulty',
        'ratingsAverage',
        'ratingsQuantity',
        'price',
        'maxGroupSize',
    ],
}));
app.use(compression());
app.use(passport.initialize());
passport.use('jwt', passport_config_1.default);
app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    next();
});
app.use(index_routes_1.default);
app.get('/', (req, res, next) => {
    res.send('API work successfully');
});
app.all('*', error_controller_1.notFound);
app.use(error_controller_1.globalErrorHandler);
exports.default = app;
//# sourceMappingURL=app.js.map