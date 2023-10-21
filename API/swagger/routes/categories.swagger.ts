/**
 * @swagger
 * tags:
 *   name: Categories
 *   description: API endpoints for managing categories
 */

/**
 * @swagger
 * /categories:
 *   get:
 *     summary: Get all categories
 *     tags: [Categories]
 *     security:
 *       - Bearer: []
 *     parameters:
 *      - name: params
 *        in: query
 *        description: page=1&limit=10&sort=+createdAt&fields=+name
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
 *           search:
 *            type: string
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/categorySchema'
 *       500:
 *         description: Internal Server Error
 *
 *   post:
 *     summary: Create a new category
 *     tags: [Categories]
 *     security:
 *       - Bearer: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/categorySchema'
 *     responses:
 *       201:
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/categorySchema'
 *       401:
 *         $ref: '#/components/responses/401'
 *       400:
 *        $ref: '#/components/responses/400'
 *       500:
 *        $ref: '#/components/responses/500'
 */

/**
 * @swagger
 * /categories/{id}:
 *   get:
 *     summary: Get a category by ID
 *     tags: [Categories]
 *     security:
 *       - Bearer: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the category to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/categorySchema'
 *       404:
 *         description: Category not found
 *       401:
 *         $ref: '#/components/responses/401'
 *       500:
 *        $ref: '#/components/responses/500'
 *
 *   patch:
 *     summary: Update a category by ID
 *     tags: [Categories]
 *     security:
 *       - Bearer: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the category to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/categorySchema'
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/categorySchema'
 *       404:
 *         description: Category not found
 *       400:
 *        $ref: '#/components/responses/400'
 *       500:
 *        $ref: '#/components/responses/500'
 *
 *   delete:
 *     summary: Delete a category by ID
 *     tags: [Categories]
 *     security:
 *       - Bearer: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the category to delete
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *        $ref: '#/components/responses/204'
 *       404:
 *         description: Category not found
 *       500:
 *        $ref: '#/components/responses/500'
 */

export const categorySchema = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      description: 'The name of the category',
    },
    description: {
      type: 'string',
      description: 'The description of the category',
    },
  },
  example: {
    description: 'Category description',
    name: 'Category name',
  },
  required: ['name', 'description'],
};

export default categorySchema;
