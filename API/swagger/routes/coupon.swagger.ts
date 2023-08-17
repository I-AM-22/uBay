/**
 * @swagger
 * tags:
 *   name: Coupons
 *   description: API endpoints for managing coupons
 */

/**
 * @swagger
 * /products/{id}/coupons:
 *   get:
 *     summary: get all coupons
 *     tags: [Coupons]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The product Id of coupons
 *       - in: query
 *         name: query
 *         description: page=1&limit=10&sort=+createdAt&fields=+discount
 *         required: false
 *         schema:
 *          type: object
 *          properties:
 *            page:
 *             type: integer
 *             minimum: 1
 *            limit:
 *             type: integer
 *            sort:
 *             type: string
 *            fields:
 *             type: string
 *            search:
 *             type: string
 *     security:
 *       - Bearer: []
 *     responses:
 *       '401':
 *         $ref: '#/components/responses/401'
 *       '200':
 *        description: The list of coupons
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/couponSchema'

 */

/**  
 * @swagger
 * /coupons/myCoupons:
 *   get:
 *     summary: get amy coupons
 *     tags: [Coupons]
 *     parameters:
 *       - in: query
 *         name: query
 *         description: page=1&limit=10&sort=+createdAt&fields=+discount
 *         required: false
 *         schema:
 *          type: object
 *          properties:
 *            page:
 *             type: integer
 *             minimum: 1
 *            limit:
 *             type: integer
 *            sort:
 *             type: string
 *            fields:
 *             type: string
 *            search:
 *             type: string
 *     security:
 *       - Bearer: []
 *     responses:
 *       '401':
 *         $ref: '#/components/responses/401'
 *       '200':
 *        description: The list of coupons
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/couponSchema'

 */

/**
 * @swagger
 * /coupons:
 *   post:
 *     summary: Create a new coupon
 *     tags: [Coupons]
 *     security:
 *       - Bearer: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/couponSchema'
 *     responses:
 *       '201':
 *         description: created
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/couponSchema'
 *       '401':
 *         $ref: '#/components/responses/401'
 *       '400':
 *         $ref: '#/components/responses/400'
 *  */

/**
 * @swagger
 * /coupons/{id}:
 *   get:
 *     summary: Get a coupon by ID
 *     tags: [Coupons]
 *     security:
 *       - Bearer: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the coupon
 *     responses:
 *       '200':
 *         description: ok
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/couponSchema'
 *       '404':
 *         description: coupon not found
 *       '401':
 *         $ref: '#/components/responses/401'
 *       '400':
 *         $ref: '#/components/responses/400'
 */

/**
 * @swagger
 * /products/{productId}/coupons/getCouponByProduct:
 *   get:
 *     summary: Get a coupon by product
 *     tags: [Coupons]
 *     security:
 *       - Bearer: []
 *     parameters:
 *       - in: path
 *         name: productId
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the product
 *     responses:
 *       '200':
 *         description: ok
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/couponSchema'
 *       '404':
 *         description: coupon not found
 *       '401':
 *         $ref: '#/components/responses/401'
 *       '400':
 *         $ref: '#/components/responses/400'
 */

/**
 * @swagger
 * /coupons/{id}:
 *   patch:
 *     summary: Update a coupon by ID
 *     tags: [Coupons]
 *     security:
 *       - Bearer: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the coupon
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/couponSchema'
 *     responses:
 *       '200':
 *         description: coupon has been updated
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/couponSchema'
 *       '404':
 *         description: Product not found
 *       '401':
 *         $ref: '#/components/responses/401'
 *       '400':
 *         $ref: '#/components/responses/400' */

/**
 * @swagger
 * /coupons/{id}:
 *   delete:
 *     summary: Delete a coupon by ID
 *     tags: [Coupons]
 *     security:
 *       - Bearer: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the coupon
 *     responses:
 *       '204':
 *         $ref: '#/components/responses/204'
 *       '404':
 *         description: coupon not found
 *       '401':
 *         $ref: '#/components/responses/401'
 */

export const couponSchema = {
  type: 'object',
  properties: {
    user: {
      type: 'string',
      description: 'The ID of the user',
      example: 'user-id',
    },
    product: {
      type: 'string',
      description: 'The ID of the product',
      example: 'product-id',
    },
    expire: {
      type: 'string',
      description: 'The expiration date of the coupon',
      example: '2023-12-31',
    },
    discount: {
      type: 'number',
      description: 'The discount value of the coupon',
      example: 10,
    },
  },
  example: {
    user: 'user-id',
    product: 'product-id',
    expire: '2023-12-31',
    discount: 10,
  },
  required: ['user', 'product', 'expire', 'discount'],
};
export const favoriteSchema = {
  type: 'object',
  properties: {
    favoriteCategories: {
      type: 'array',
      description: 'The IDs of the categories',
    },
    favoriteCities: {
      type: 'array',
      description: 'The ID of the cities',
    },
  },
  example: {
    favoriteCategories: ['id'],
    favoriteCities: ['id'],
  },
};
