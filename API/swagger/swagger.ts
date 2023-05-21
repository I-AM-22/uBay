import swaggerJsdoc from 'swagger-jsdoc';
const options: swaggerJsdoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'REST API Docs',
      version: '1.0.0',
      description:
        'This is a API store application made with Express and documented with Swagger',
    },
    servers: [
      {
        url: 'http://localhost:3000/api/v1',
        description: 'Development server',
      },
    ],
    components: {
      schemas: {
        signUp: {
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
          },
          example: {
            name: 'bahaa',
            email: 'bahaa@gmail.com',
            password: 'test1234',
            passwordConfirm: 'test1234',
          },
        },
        updateMe: {
          type: 'object',
          properties: {
            name: {
              type: 'string',
            },
            email: {
              type: 'string',
            },
          },
          example: {
            name: 'bahaa',
            email: 'bahaa@gmail.com',
          },
        },
      },
      securitySchemes: {
        Bearer: {
          type: 'apiKey',
          name: 'Authorization',
          in: 'header',
          description:
            '>-Enter the token with the `Bearer: ` prefix, e.g. "Bearer abcde12345".',
        },
      },

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
  apis: [
    './swagger/routes/auth.swagger.ts',
    './swagger/routes/users.swagger.ts',
  ],
};

const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;
