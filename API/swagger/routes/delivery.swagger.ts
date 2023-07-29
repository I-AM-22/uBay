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



// /**
//  * @swagger
//  * /deliveries/receive:
//  *   post:
//  *     summary: receive from seller and and customer
//  *     tags: [Deliveries]
//  *     security:
//  *       - Bearer: []
//  *         schema:
//  *           type: string
//  *         required: true
//  *         description: ID of the delivery
//  *     responses:
//  *       '200':
//  *         description: ok
//  *         content:
//  *           application/json:
//  *             schema:
//  *                $ref: '#/components/schemas/deliverySchema'
//  *       '404':
//  *         description: Comment not found
//  *       '401':
//  *         $ref: '#/components/responses/401'
//  */

/**
 * @swagger
 * /deliveries/receive:
 *   post:
 *     summary: Receive delivery from seller and customer
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
 *       '200':
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/DeliverySchema'
 *       '404':
 *         description: Delivery not found
 *       '401':
 *         $ref: '#/components/responses/401'
 */


/**
 * @swagger
 * /deliveries/generateQrForSeller:
 *   post:
 *     summary: Generate Qr For Seller
 *     tags: [Deliveries]
 *     security:
 *       - Bearer: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/QrSchema'
 *     responses:
 *       '200':
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/QrSchema'
 *       '404':
 *         description: Delivery not found
 *       '401':
 *         $ref: '#/components/responses/401'
 */


/**
 * @swagger
 * /deliveries/generateQrForCustomer:
 *   post:
 *     summary: Generate Qr For Customer
 *     tags: [Deliveries]
 *     security:
 *       - Bearer: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/QrSchema'
 *     responses:
 *       '200':
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/QrSchema'
 *       '404':
 *         description: Delivery not found
 *       '401':
 *         $ref: '#/components/responses/401'
 */
export const deliverySchema = {
    type: 'object',
    properties: {
        payment: {
            type: 'string',
            description: 'payment',
        },
        employee: {
            type: 'string',
            description: 'employee',
        },
        customer_date: {
            type: 'string',
            description: 'the date that customer receive',
        },
        seller_date: {
            type: 'string',
            description: 'the date that customer receive',
        },
        status: {
            type: 'string',
            description: 'to check who is recieve 0 for seller and 1 for customer',
        },
    },
    example: {
        payment: 'ID',
        status: "0"
    },
    required: ['payment', 'status'],
};
export const QrSchema = {
    type: 'object',
    properties: {
        product: {
            type: 'string',
            description: 'product',
        },
    },
    example: {
        product: 'ID',
    },
    required: ['product'],
};
