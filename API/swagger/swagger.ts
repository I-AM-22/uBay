import { Express, Request, Response } from "express";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
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
        url: 'http://localhost:3000/api/v1',
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
          },
          example: {
            name: 'ibrahim',
            email: 'ibrahim@gmail.com',
            password: 'test1234',
            passwordConfirm: 'test1234',
          },
        },
      },
      securitySchemes: {
        ApiKeyAuth: {
          type: 'apiKey',
          in: 'header',
          name: 'Authorization'
        }
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
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ["./swagger/routes/auth.swagger.ts", "./swagger/routes/users.swagger.ts"],
};

const swaggerSpec = swaggerJsdoc(options);

function swaggerDocs(app: Express, port: number | string) {
  // Swagger page
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  // Docs in JSON format
  app.get("/docs.json", (req: Request, res: Response) => {
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerSpec);
  });

  console.log(`Docs available at http://localhost:${port}/docs`);
}

export default swaggerDocs;
