/**
 * @swagger
 * tags:
 *   name: Products
 *   description: API to manage products
 */

/**
 * @swagger
 * /products:
 *   get:
 *     summary: Get all products
 *     tags: [Products]
 *     responses:
 *       '200':
 *         description: The list of Users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 *       '401':
 *         $ref: '#/components/responses/401'
 */

/**
 * @swagger
 * /products/{id}:
 *   get:
 *     summary: Get a product by ID
 *     tags: [Products]
 *     security:
 *       - Bearer: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the product
 *     responses:
 *       '200':
 *         $ref: '#/components/responses/200'
 *       '404':
 *         description: Comment not found
 *       '401':
 *         $ref: '#/components/responses/401'
 */

/**
 * @swagger
 * /products:
 *   post:
 *     summary: Create a new product
 *     tags: [Products]
 *     security:
 *       - Bearer: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     responses:
 *       '201':
 *         $ref: '#/components/responses/201'
 *       '401':
 *         $ref: '#/components/responses/401'
 *       '400':
 *         $ref: '#/components/responses/400'
 */

/**
 * @swagger
 * /products/{id}:
 *   patch:
 *     summary: Update a product by ID
 *     tags: [Products]
 *     security:
 *       - Bearer: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the product
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     responses:
 *       '200':
 *         $ref: '#/components/responses/200'
 *       '404':
 *         description: Comment not found
 *       '401':
 *         $ref: '#/components/responses/401'
 *       '400':
 *         $ref: '#/components/responses/400'
 */

/**
 * @swagger
 * /products/{id}:
 *   delete:
 *     summary: Delete a product by ID
 *     tags: [Products]
 *     security:
 *       - Bearer: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the product
 *     responses:
 *       '204':
 *         $ref: '#/components/responses/204'
 *       '404':
 *         description: Product not found
 *       '401':
 *         $ref: '#/components/responses/401'
 */

/**
 * @swagger
 * /products/{id}/likes:
 *   post:
 *     summary: Like a product
 *     tags: [Products]
 *     security:
 *       - Bearer: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the product
 *     responses:
 *       '200':
 *         description: OK
 *       '404':
 *         description: Product not found
 *       '401':
 *         $ref: '#/components/responses/401'
 */

/**
 * @swagger
 * /products/{id}/likes:
 *   delete:
 *     summary: Remove a like from a product
 *     tags: [Products]
 *     security:
 *       - Bearer: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the product
 *     responses:
 *       '200':
 *         description: OK
 *       '404':
 *         description: Product not found
 *       '401':
 *         $ref: '#/components/responses/401'
 */

export const productSchema = {
  type: 'object',
  properties: {
    content: {
      type: 'string',
      description: 'The content of the product',
    },
    user: {
      type: 'string',
      description: 'The ID of the user who created the product',
    },
    likes: {
      type: 'number',
      description: 'The number of likes for the product',
    },
    photos: {
      type: 'array',
      items: { type: 'string', format: 'binary' },
      description: 'Array of photo URLs for the product',
    },
    price: { type: 'number', description: 'The price of the product' },
    category: {
      type: 'string',
      description: 'The ID of the category to which the product belongs',
    },
  },
  example: {
    content: 'Product content',
    user: 'user-id',
    likes: 10,
    photos: ['https://photo1.jpg', 'https://photo2.jpg'],
    price: 99.99,
    category: 'category-id',
  },
  required: ['content', 'photos', 'price', 'category'],
};
