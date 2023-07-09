/**
 * @swagger
 * tags:
 *   name: Deliveries
 *   description: API to manage Deliveries
 */

/**
 * @swagger
 * /deliveries:
 *   get:
 *     summary: Get all Deliveries
 *     tags: [Deliveries]
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
 *         description: The list of Deliveries
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/deliverySchema'
 *       '401':
 *         $ref: '#/components/responses/401'
 */

/**
 * @swagger
 * /deliveries/{id}:
 *   get:
 *     summary: Get a deliveries by ID
 *     tags: [Deliveries]
 *     security:
 *       - Bearer: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the delivery
 *     responses:
 *       '200':
 *         description: ok
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/deliverySchema'
 *       '404':
 *         description: Comment not found
 *       '401':
 *         $ref: '#/components/responses/401'
 */

/**
 * @swagger
 * /deliveries:
 *   post:
 *     summary: Create a new deliveries
 *     tags: [Deliveries]
 *     security:
 *       - Bearer: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/deliverySchema'
 *     responses:
 *       '201':
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/deliverySchema'
 *       '401':
 *         $ref: '#/components/responses/401'
 *       '400':
 *         $ref: '#/components/responses/400'
 */


/**
 * @swagger
 * /deliveries/{id}:
 *   patch:
 *     summary: cusomer recept
 *     tags: [Deliveries]
 *     security:
 *       - Bearer: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the delivery
 *     responses:
 *       '200':
 *         description: ok
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/deliverySchema'
 *       '404':
 *         description: Comment not found
 *       '401':
 *         $ref: '#/components/responses/401'
 */
export const deliverySchema = {
    type: 'object',
    properties: {
        payment: {
            type: 'string',
            description: 'The name of the store',
        },
        employee: {
            type: 'string',
            description: 'The address of the store',
        },
        customer_receipt: {
            type: 'string',
            description: 'timestamp for customer',
        },
    },
    example: {
        payment: 'ID',
    },
    required: ['payment'],
};