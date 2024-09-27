/**
 * @swagger
 * tags:
 *   name: Stores
 *   description: API to manage Stores
 */

/**
 * @swagger
 * /stores:
 *   get:
 *     summary: Get all stores
 *     tags: [Stores]
 *     security:
 *       - Bearer: []
 *     parameters:
 *      - name: params
 *        in: query
 *        required: false
 *        schema:
 *         type: object
 *         properties:
 *           page:
 *            type: string
 *           limit:
 *            type: string
 *     responses:
 *       '200':
 *         description: The list of stores
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/storeSchema'
 *       '401':
 *         $ref: '#/components/responses/401'
 */

/**
 * @swagger
 * /stores/{id}:
 *   get:
 *     summary: Get a store by ID
 *     tags: [Stores]
 *     security:
 *       - Bearer: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the store
 *     responses:
 *       '200':
 *         description: ok
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/storeSchema'
 *       '404':
 *         description: Comment not found
 *       '401':
 *         $ref: '#/components/responses/401'
 */

/**
 * @swagger
 * /stores/{storeID}/getAllproduct:
 *   get:
 *     summary: Get All Product In The Store
 *     tags: [Stores]
 *     security:
 *       - Bearer: []
 *     parameters:
 *       - in: path
 *         name: storeID
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the store
 *     responses:
 *       '200':
 *         description: ok
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/storeSchema'
 *       '404':
 *         description: Comment not found
 *       '401':
 *         $ref: '#/components/responses/401'
 */

/**
 * @swagger
 * /stores:
 *   post:
 *     summary: Create a new store
 *     tags: [Stores]
 *     security:
 *       - Bearer: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/storeSchema'
 *     responses:
 *       '201':
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/storeSchema'
 *       '401':
 *         $ref: '#/components/responses/401'
 *       '400':
 *         $ref: '#/components/responses/400'
 */

/**
 * @swagger
 * /stores/{id}:
 *   patch:
 *     summary: Update a store by ID
 *     tags: [Stores]
 *     security:
 *       - Bearer: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the store
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/storeSchema'
 *     responses:
 *       '200':
 *         description: comment has been updated
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/storeSchema'
 *       '404':
 *         description: Product not found
 *       '401':
 *         $ref: '#/components/responses/401'
 *       '400':
 *         $ref: '#/components/responses/400'
 */

/**
 * @swagger
 * /stores/{id}:
 *   delete:
 *     summary: Delete a store by ID
 *     tags: [Stores]
 *     security:
 *       - Bearer: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the store
 *     responses:
 *       '204':
 *         $ref: '#/components/responses/204'
 *       '404':
 *         description: Comment not found
 *       '401':
 *         $ref: '#/components/responses/401'
 */

export const storeSchema = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      description: 'The name of the store',
    },
    address: {
      type: 'string',
      description: 'The address of the store',
    },
    city: {
      type: 'string',
      description: 'The ID of the city to which the store belongs',
    },
  },
  example: {
    name: 'store name',
    address: 'store address',
    city: 'cityID',
  },
  required: ['name', 'address', 'city'],
};
