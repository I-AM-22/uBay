import * as swaggerJsdoc from 'swagger-jsdoc'
import { productSchema } from '@swagger/routes/products.swagger'
import { updateMe, signUp } from '@swagger/routes/auth.swagger'
import { commentSchema } from '@swagger/routes/comments.swagger'
import { categorySchema } from '@swagger/routes/categories.swagger'
import { citySchema } from '@swagger/routes/cities.swagger'
import { storeSchema } from '@swagger/routes/stores.swagger'
import { employeeSchema } from '@swagger/routes/employees.swagger'
import { couponSchema, favoriteSchema } from '@swagger/routes/coupon.swagger'
import { paymentSchema } from '@swagger/routes/payment.swagger'
import { deliverySchema } from '@swagger/routes/delivery.swagger'
import { QrSchema } from '@swagger/routes/delivery.swagger'
import { chatSchema } from '@swagger/routes/chat.swagger'
import { updatechatSchema } from '@swagger/routes/chat.swagger'
import { messagesSchema } from '@swagger/routes/messages.swagger'
import { profitSchema } from '@swagger/routes/profits.swagger'
import { settings } from '@config/settings'

const serverUrl =
  settings.NODE_ENV === 'production' ? settings.SERVER_URL : settings.LOCAL_URL
const options: swaggerJsdoc.Options = {
  url: '',
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'REST API Docs',
      version: '1.0.0',
      description:
        'This is an API store application made with Express and documented with Swagger',
    },
    servers: [
      {
        url: serverUrl + '/api/v1',
        description: 'Development server',
      },
    ],
    components: {
      schemas: {
        signUp,
        updateMe,
        productSchema,
        commentSchema,
        categorySchema,
        citySchema,
        storeSchema,
        employeeSchema,
        couponSchema,
        paymentSchema,
        deliverySchema,
        QrSchema,
        chatSchema,
        updatechatSchema,
        messagesSchema,
        favoriteSchema,
        profitSchema,
      },
      securitySchemes: {
        Bearer: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
          description: 'Enter the token : abcde12345".',
        },
      },
      responses: {
        201: {
          description: 'created',
        },
        200: {
          description: 'ok',
        },
        204: {
          description: 'No content',
        },
        400: {
          description: 'Bad request',
        },
        401: {
          description: 'Unauthorized',
        },
        403: {
          description: 'Forbidden',
        },
        404: {
          description: 'Not found',
        },
        500: {
          description: 'Internal server error',
        },
      },
    },
  },
  apis: [
    'src/swagger/routes/auth.swagger.ts',
    'src/swagger/routes/admins.swagger.ts',
    'src/swagger/routes/users.swagger.ts',
    'src/swagger/routes/products.swagger.ts',
    'src/swagger/routes/comments.swagger.ts',
    'src/swagger/routes/categories.swagger.ts',
    'src/swagger/routes/cities.swagger.ts',
    'src/swagger/routes/stores.swagger.ts',
    'src/swagger/routes/employees.swagger.ts',
    'src/swagger/routes/coupon.swagger.ts',
    'src/swagger/routes/wallet.swagger.ts',
    'src/swagger/routes/payment.swagger.ts',
    'src/swagger/routes/delivery.swagger.ts',
    'src/swagger/routes/chat.swagger.ts',
    'src/swagger/routes/messages.swagger.ts',
    'src/swagger/routes/statistics.swagger.ts',
    'src/swagger/routes/profits.swagger.ts',
  ],
}

const swaggerSpec = swaggerJsdoc(options)

export default swaggerSpec
