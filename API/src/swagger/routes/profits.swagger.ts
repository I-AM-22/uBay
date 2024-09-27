/**
 * @swagger
 * tags:
 *   name: Profits
 *   description: API to manage profits
 */

/**
 * @swagger
 * /profits:
 *   get:
 *     summary: Get all profits
 *     tags: [Profits]
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
 *           search:
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
 * /profits/percentage:
 *   get:
 *     summary: Get percentage
 *     tags: [Profits]
 *     security:
 *       - Bearer: []
 *     responses:
 *       '200':
 *         description: The list of profits
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/profitSchema'
 *       '401':
 *         $ref: '#/components/responses/401'
 */

/**
 * @swagger
 * /profits/createOrUpdatePercentage:
 *   post:
 *     summary: create Or Update Percentage
 *     tags: [Profits]
 *     security:
 *       - Bearer: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/profitSchema'
 *     responses:
 *       '201':
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/profitSchema'
 *       '401':
 *         $ref: '#/components/responses/401'
 *       '400':
 *         $ref: '#/components/responses/400'
 */

export const profitSchema = {
    type: 'object',
    properties: {
        value: {
            type: 'string',
            description: 'The value of the profit',
        },
    },
    example: {
        value: '4',
    },
    required: ['value'],
};