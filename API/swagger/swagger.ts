import swaggerJsdoc from "swagger-jsdoc";
import { version } from "../package.json";
const options: swaggerJsdoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "REST API Docs",
      version,
      description: 'This is a API store application made with Express and documented with Swagger',
    },  
    servers: [
      {
        url: 'http://127.0.0.1:3000/api/v1',
        description: 'Development server',
      },
    ],
    components: {
      schemas: {
        User: {
          type: 'object',
          required: ['name', 'email', 'password', 'passwordConfirm'],
          properties: {
            name: {
              type: 'string',
            },
            email: {
              type: 'string',
            },
            password: {
              type: 'string',
            },
            passwordConfirm: {
              type: 'string',
            },
            photo: {
              type: 'string',
            },
          },
          example: {
            name: 'ibrahim',
            email: 'ibrahim@gmail.com',
            password: 'test1234',
            passwordConfirm: 'test1234',
            photo: 'string',
          },
        },
      },
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          in: 'header',
          name: 'Authorization',
          description: 'Bearer Token',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
      security: [
        {
          bearerAuth: [],
        },
      ],
      responses: {
        400: {
          description:
            'Missing API key - include it in the Authorization header',
          contents: 'application/json',
        },
        401: {
          description: 'Unauthorized - incorrect API key or incorrect format',
          contents: 'application/json',
        },
        404: {
          description: 'Not found - the user was not found',
          contents: 'application/json',
        },
      },
    },
  },
  apis: ["./swagger/routes/auth.swagger.ts", "./swagger/routes/users.swagger.ts"],
};

const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;
