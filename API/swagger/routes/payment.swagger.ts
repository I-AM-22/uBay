/**
 * @swagger
 * tags:
 *   name: Payments
 *   description: API to manage Payments
 */

/**
 * @swagger
 * /payments:
 *   get:
 *     summary: Get all payments for Admins
 *     tags: [Payments]
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
 *         description: The list of payments
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/paymentSchema'
 *       '401':
 *         $ref: '#/components/responses/401'
 */

/**
 * @swagger
 * /payments/{id}:
 *   get:
 *     summary: Get a payment by ID
 *     tags: [Payments]
 *     security:
 *       - Bearer: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the payment
 *     responses:
 *       '200':
 *         description: ok
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/paymentSchema'
 *       '404':
 *         description: Comment not found
 *       '401':
 *         $ref: '#/components/responses/401'
 */

/**
 * @swagger
 * /payments:
 *   post:
 *     summary: Create a new payment with User
 *     tags: [Payments]
 *     security:
 *       - Bearer: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/paymentSchema'
 *     responses:
 *       '201':
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/paymentSchema'
 *       '401':
 *         $ref: '#/components/responses/401'
 *       '400':
 *         $ref: '#/components/responses/400'
 */


/**
* @swagger
* /payments/{id}:
*   delete:
*     summary: Delete a payment by ID with Admins
*     tags: [Payments]
*     security:
*       - Bearer: []
*     parameters:
*       - in: path
*         name: id
*         schema:
*           type: string
*         required: true
*         description: ID of the payments
*     responses:
*       '204':
*         $ref: '#/components/responses/204'
*       '404':
*         description: Comment not found
*       '401':
*         $ref: '#/components/responses/401'
*/

export const paymentSchema = {
    type: 'object',
    properties: {
        product: {
            type: 'string',
            description: 'The id of product you wil buy',
        },
        note: {
            type: 'string',
            description: 'optional',
        }
    },
    example: {
        product: '32432423ksdj',
        note: 'لقد تم دفع الحساب كاملا',
    },
    required: ['product'],
};