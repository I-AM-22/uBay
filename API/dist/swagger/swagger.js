"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const swaggerJsdoc = require("swagger-jsdoc");
const products_swagger_1 = require("./routes/products.swagger");
const auth_swagger_1 = require("./routes/auth.swagger");
const comments_swagger_1 = require("./routes/comments.swagger");
const categories_swagger_1 = require("./routes/categories.swagger");
const cities_swagger_1 = require("./routes/cities.swagger");
const stores_swagger_1 = require("./routes/stores.swagger");
const employees_swagger_1 = require("./routes/employees.swagger");
const coupon_swagger_1 = require("./routes/coupon.swagger");
const payment_swagger_1 = require("./routes/payment.swagger");
const delivery_swagger_1 = require("./routes/delivery.swagger");
const delivery_swagger_2 = require("./routes/delivery.swagger");
const chat_swagger_1 = require("./routes/chat.swagger");
const chat_swagger_2 = require("./routes/chat.swagger");
const messages_swagger_1 = require("./routes/messages.swagger");
const profits_swagger_1 = require("./routes/profits.swagger");
const options = {
    url: '',
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'REST API Docs',
            version: '1.0.0',
            description: 'This is an API store application made with Express and documented with Swagger',
        },
        servers: [
            {
                url: 'https://ubay-9pwo.onrender.com/api/v1',
                description: 'Development server',
            },
        ],
        components: {
            schemas: {
                signUp: auth_swagger_1.signUp,
                updateMe: auth_swagger_1.updateMe,
                productSchema: products_swagger_1.productSchema,
                commentSchema: comments_swagger_1.commentSchema,
                categorySchema: categories_swagger_1.categorySchema,
                citySchema: cities_swagger_1.citySchema,
                storeSchema: stores_swagger_1.storeSchema,
                employeeSchema: employees_swagger_1.employeeSchema,
                couponSchema: coupon_swagger_1.couponSchema,
                paymentSchema: payment_swagger_1.paymentSchema,
                deliverySchema: delivery_swagger_1.deliverySchema,
                QrSchema: delivery_swagger_2.QrSchema,
                chatSchema: chat_swagger_1.chatSchema,
                updatechatSchema: chat_swagger_2.updatechatSchema,
                messagesSchema: messages_swagger_1.messagesSchema,
                favoriteSchema: coupon_swagger_1.favoriteSchema,
                profitSchema: profits_swagger_1.profitSchema,
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
        './swagger/routes/auth.swagger.ts',
        './swagger/routes/admins.swagger.ts',
        './swagger/routes/users.swagger.ts',
        './swagger/routes/products.swagger.ts',
        './swagger/routes/comments.swagger.ts',
        './swagger/routes/categories.swagger.ts',
        './swagger/routes/cities.swagger.ts',
        './swagger/routes/stores.swagger.ts',
        './swagger/routes/employees.swagger.ts',
        './swagger/routes/coupon.swagger.ts',
        './swagger/routes/wallet.swagger.ts',
        './swagger/routes/payment.swagger.ts',
        './swagger/routes/delivery.swagger.ts',
        './swagger/routes/chat.swagger.ts',
        './swagger/routes/messages.swagger.ts',
        './swagger/routes/statistics.swagger.ts',
        './swagger/routes/profits.swagger.ts',
    ],
};
const swaggerSpec = swaggerJsdoc(options);
exports.default = swaggerSpec;
//# sourceMappingURL=swagger.js.map