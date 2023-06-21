import swaggerJsdoc, { Options } from 'swagger-jsdoc';
import { productSchema } from './routes/products.swagger';
import { updateMe, signUp } from './routes/auth.swagger';
import { commentSchema } from './routes/comments.swagger';
import { categorySchema } from './routes/categories.swagger';
import { citySchema } from './routes/cities.swagger';
const options: Options = {
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
        url: 'http://localhost:3000/api/v1',
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
    './swagger/routes/auth.swagger.ts',
    './swagger/routes/admins.swagger.ts',
    './swagger/routes/users.swagger.ts',
    './swagger/routes/products.swagger.ts',
    './swagger/routes/comments.swagger.ts',
    './swagger/routes/categories.swagger.ts',
    './swagger/routes/cities.swagger.ts',
  ],
};

const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;
