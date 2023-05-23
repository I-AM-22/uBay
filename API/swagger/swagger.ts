import swaggerJsdoc, { Options } from 'swagger-jsdoc';
import { productSchema } from './routes/products.swagger';
import { updateMe, signUp } from './routes/auth.swagger';
import { commentSchema } from './routes/comments.swagger';
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
      },
      securitySchemes: {
        Bearer: {
          type: 'apiKey',
          name: 'Authorization',
          in: 'header',
          description:
            'Enter the token with the `Bearer: ` prefix, e.g. "Bearer abcde12345".',
        },
      },
      responses: {
        201: {
          description: 'created',
          contents: {
            'application/json': {},
          },
        },
        200: {
          description: 'ok',
          contents: {
            'application/json': {},
          },
        },
        204: {
          description: 'No content',
          contents: {
            'application/json': {},
          },
        },
        400: {
          description: 'Bad request',
          contents: {
            'application/json': {},
          },
        },
        401: {
          description: 'Unauthorized',
          contents: {
            'application/json': {},
          },
        },
        404: {
          description: 'Not found - the user was not found',
          contents: {
            'application/json': {},
          },
        },
      },
    },
  },
  apis: [
    './swagger/routes/auth.swagger.ts',
    './swagger/routes/users.swagger.ts',
    './swagger/routes/products.swagger.ts',
    './swagger/routes/comments.swagger.ts',
  ],
};

const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;
