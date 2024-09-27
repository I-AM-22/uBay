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
 *     security:
 *       - Bearer: []
 *     parameters:
 *      - name: params
 *        in: query
 *        description: page=1&limit=10&sort=+price&fields=+content&createdAt[gte]=${Date} paid:true for paid product,false for not paid product,remove is_paid for all
 *        required: false
 *        schema:
 *         type: object
 *         properties:
 *           page:
 *            type: integer
 *            minimum: 1
 *           limit:
 *            type: integer
 *           sort:
 *            type: string
 *           fields:
 *            type: string
 *           q:
 *            type: string
 *           is_paid:
 *            type: boolean
 *     responses:
 *       '200':
 *         description: The list of products
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/productSchema'
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
 *         description: ok
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/productSchema'
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
 *             $ref: '#/components/schemas/productSchema'
 *     responses:
 *       '201':
 *         description: created
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/productSchema'
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
 *             $ref: '#/components/schemas/productSchema'
 *     responses:
 *       '200':
 *         description: Product has been updated
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/productSchema'
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

// /**
//  * @swagger
//  *   /products/mine:
//  *     get:
//  *       summary: Get my products
//  *       tags: [Products]
//  *       security:
//  *         - Bearer: []
//  *       responses:
//  *         "200":
//  *           description: My Products
//  *           content:
//  *             application/json:
//  *               schema:
//  *                 $ref: '#/components/schemas/productSchema'

//  *         "400":
//  *           $ref: '#/components/responses/400'
//  *         "401":
//  *           $ref: '#/components/responses/401'
//  */

/**
 * @swagger
 *   /products/mine:
 *     get:
 *       summary: Get my products
 *       tags: [Products]
 *       security:
 *         - Bearer: []
 *       parameters:
 *         - in: query
 *           name: isBuy
 *           schema:
 *             type: boolean
 *           required: true
 *           description: Specify if the products are for buying (true) or not (false)
 *       responses:
 *         "200":
 *           description: My Products
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/productSchema'
 *         "400":
 *           $ref: '#/components/responses/400'
 *         "401":
 *           $ref: '#/components/responses/401'
 */


export const productSchema = {
  type: 'object',
  properties: {
    title: { type: 'string', description: 'The title of the product' },
    content: {
      type: 'string',
      description: 'The content of the product',
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
    store: {
      type: 'string',
      description: 'The ID of the store to which the product will delivery',
    },
  },
  example: {
    title: 'Product title',
    content: 'Product content',
    user: 'user-id',
    photos: ['https://photo1.jpg', 'https://photo2.jpg'],
    price: 99,
    category: 'category-id',
    likes: 10,
    likedBy: [],
    likedByMe: false,
    store:"IdStore"
  },
  required: ['content', 'photos', 'price', 'category', 'title','store'],
};
