import express, {
  NextFunction,
  Response,
  Request,
  json,
  urlencoded,
} from 'express';
import path from 'path';
import morgan from 'morgan';
import helmet from 'helmet';
import mongoSanitize from 'express-mongo-sanitize';
import cookieParser from 'cookie-parser';
import hpp from 'hpp';
import cors from 'cors';
import compression from 'compression';
// import xss from 'xss-clean';
import { globalErrorHandler } from '@controllers/error.controller';
// import csurf from 'csurf';
import AppError from '@utils/appError';
import userRouter from '@routes/user.routes';
import xss from '@middlewares/xss.middleware';
import { settings } from './config/settings';
import routes from '@routes/index.routes';
import JWTStrategy from '@middlewares/passport.config';
import passport from 'passport';
import { rateLimit } from 'express-rate-limit';

const app: express.Application = express();

//middlewares
app.use(cors());
app.options('*', cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use(helmet());
if (settings.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.disable('x-powered-by');

const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: 'Too many requests from this IP, please try again in an hour!',
});
app.use('/api', limiter);
app.use(json({ limit: '10kb' }));
app.use(urlencoded({ extended: false }));
app.use(cookieParser());
app.use(mongoSanitize());
app.use(xss);
app.use(
  hpp({
    whitelist: [
      'duration',
      'difficulty',
      'ratingsAverage',
      'ratingsQuantity',
      'price',
      'maxGroupSize',
    ],
  })
);
app.use(compression());
app.use(passport.initialize());
passport.use(JWTStrategy);

app.use((req: any, res: Response, next: NextFunction) => {
  req.requestTime = new Date().toISOString();
  next();
});

//Routes
app.use(routes);
//for other routes

app.use(globalErrorHandler);
//and the other middleware like morgan used in the  all routes
export default app;
