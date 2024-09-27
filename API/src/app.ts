import { NextFunction, Request, Response, json, urlencoded } from 'express'
import * as express from 'express'
import * as path from 'path'
import * as morgan from 'morgan'
import helmet from 'helmet'
import * as mongoSanitize from 'express-mongo-sanitize'
import * as cookieParser from 'cookie-parser'
import * as hpp from 'hpp'
import * as cors from 'cors'
import * as compression from 'compression'
import { globalErrorHandler, notFound } from '@controllers/error.controller'
import { settings } from './config/settings'
import routes from '@routes/index.routes'
import JWTStrategy from '@middlewares/passport.config'
import * as passport from 'passport'
import * as cls from 'cls-hooked'
import { STATUS_CODE } from './types/helper.types'
// import { rateLimit } from 'express-rate-limit';
const app = express()
const namespace = cls.createNamespace('app')
//middlewares

// Bind the namespace to the Express request object

app.use((req, res, next) => {
  namespace.bindEmitter(req)
  namespace.bindEmitter(res)
  namespace.run(() => {
    next()
  })
})
app.use(cors())
app.options('*', cors())
app.use(express.static(path.join(__dirname, 'public')))

app.use(helmet())
if (settings.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}
app
  .route('/health')
  .get(async (req: Request, res: Response, next: NextFunction) => {
    return res.status(STATUS_CODE.SUCCESS).json({ status: 'success' })
  })
app.disable('x-powered-by')

// const limiter = rateLimit({
//   max: 100,
//   windowMs: 60 * 60 * 1000,
//   message: 'Too many requests from this IP, please try again in an hour!',
// });
// app.use('/api', limiter);
// With this declaration file in place, you should be able to use import xssClean from 'xss-clean' and app.use(xssClean())

app.use(json({ limit: '10kb' }))
app.use(urlencoded({ extended: false }))
app.use(cookieParser())
app.use(mongoSanitize())
// app.use(xssClean());
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
)
app.use(compression())

app.use(passport.initialize())

passport.use('jwt', JWTStrategy)

app.use((req: any, res: Response, next: NextFunction) => {
  req.requestTime = new Date().toISOString()
  next()
})

//Routes
app.use(routes)

// For Views

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send('API work successfully')
})

//for other routes
app.all('*', notFound)

//errors handler
app.use(globalErrorHandler)

export default app
