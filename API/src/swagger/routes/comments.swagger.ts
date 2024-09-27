/**
 * @swagger
 * tags:
 *   name: Comments
 *   description: API endpoints for managing comments
 */

/**
 * @swagger
 * /products/{id}/comments:
 *   get:
 *     summary: get all comments
 *     tags: [Comments]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The product Id of comments
 *       - in: query
 *         name: query
 *         description: page=1&limit=10&sort=+createdAt&fields=+content
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
 *         $ref: '#/components/responses/200'

 */

/**
 * @swagger
 * /comments:
 *   post:
 *     summary: Create a new comment
 *     tags: [Comments]
 *     security:
 *       - Bearer: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/commentSchema'
 *     responses:
 *       '201':
 *         description: created
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/commentSchema'
 *       '401':
 *         $ref: '#/components/responses/401'
 *       '400':
 *         $ref: '#/components/responses/400'
 *  */

/**
 * @swagger
 * /comments/{id}:
 *   get:
 *     summary: Get a comment by ID
 *     tags: [Comments]
 *     security:
 *       - Bearer: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the comment
 *     responses:
 *       '200':
 *         description: ok
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/commentSchema'
 *       '404':
 *         description: Comment not found
 *       '401':
 *         $ref: '#/components/responses/401'
 *       '400':
 *         $ref: '#/components/responses/400'
 */

/**
 * @swagger
 * /comments/{id}:
 *   patch:
 *     summary: Update a comment by ID
 *     tags: [Comments]
 *     security:
 *       - Bearer: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the comment
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/commentSchema'
 *     responses:
 *       '200':
 *         description: comment has been updated
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/commentSchema'
 *       '404':
 *         description: Product not found
 *       '401':
 *         $ref: '#/components/responses/401'
 *       '400':
 *         $ref: '#/components/responses/400' */

/**
 * @swagger
 * /comments/{id}:
 *   delete:
 *     summary: Delete a comment by ID
 *     tags: [Comments]
 *     security:
 *       - Bearer: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the comment
 *     responses:
 *       '204':
 *         $ref: '#/components/responses/204'
 *       '404':
 *         description: Comment not found
 *       '401':
 *         $ref: '#/components/responses/401'
 */

export const commentSchema = {
  type: 'object',
  properties: {
    content: {
      type: 'string',
      description: 'The content of the comment',
      example: 'This is a comment',
    },
    user: {
      type: 'string',
      description: 'The ID of the user creating the comment',
      example: 'user-id',
    },
    product: {
      type: 'string',
      description: 'The ID of the product the comment belongs to',
      example: 'product-id',
    },
  },
  example: {
    content: 'Comment content',
    user: 'user-id',
    product: 'product-id',
  },
  required: ['content', 'product'],
};
