/**
 * @swagger
 * tags:
 *   name: Chats
 *   description: API to manage Chats
 */

/**
 * @swagger
 * /chats:
 *   get:
 *     summary: Get All My Chats Whatever If I Seller Or Customer
 *     tags: [Chats]
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
 *         description: The list of Chats
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/chatSchema'
 *       '401':
 *         $ref: '#/components/responses/401'
 */

/**
 * @swagger
 * /chats/{id}:
 *   get:
 *     summary: Get a chats by ID
 *     tags: [Chats]
 *     security:
 *       - Bearer: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the chats
 *     responses:
 *       '200':
 *         description: ok
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/updatechatSchema'
 *       '404':
 *         description: Comment not found
 *       '401':
 *         $ref: '#/components/responses/401'
 */

/**
 * @swagger
 * /chats:
 *   post:
 *     summary: Create a New Chat If Doesn't Exist Else Show The Current Chat
 *     tags: [Chats]
 *     security:
 *       - Bearer: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/chatSchema'
 *     responses:
 *       '201':
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/chatSchema'
 *       '401':
 *         $ref: '#/components/responses/401'
 *       '400':
 *         $ref: '#/components/responses/400'
 */

/**
 * @swagger
 * /chats/{id}:
 *   patch:
 *     summary: Update a chat by ID
 *     tags: [Chats]
 *     security:
 *       - Bearer: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the chat
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/updatechatSchema'
 *     responses:
 *       '200':
 *         description: chat has been updated
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/updatechatSchema'
 *       '404':
 *         description: chat not found
 *       '401':
 *         $ref: '#/components/responses/401'
 *       '400':
 *         $ref: '#/components/responses/400' 
 */

/**
 * @swagger
 * /chats/{id}:
 *   delete:
 *     summary: Delete a chats by ID
 *     tags: [Chats]
 *     security:
 *       - Bearer: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the chats
 *     responses:
 *       '204':
 *         $ref: '#/components/responses/204'
 *       '404':
 *         description: Product not found
 *       '401':
 *         $ref: '#/components/responses/401'
 */

export const chatSchema = {
    type: 'object',
    properties: {
        name: {
            type: 'string',
            description: 'name of the chat',
        },
        product: {
            type: 'string',
            description: 'The product',
        },
        user: {
            type: 'string',
            description: 'who the user want to talk to him',
        }
    },
    example: {
        name: 'sender',
        product: 'productID',
        user: 'userID',
    },
    required: ['product', 'user'],
};
export const updatechatSchema = {
    type: 'object',
    properties: {
        name: {
            type: 'string',
            description: 'name of the chat',
        },
        product: {
            type: 'string',
            description: 'The product',
        },
        seller: {
            type: 'string',
            description: 'who sell the prodcut',
        },
        customer: {
            type: 'string',
            description: 'who the buy the product',
        }
    },
    example: {
        name: 'sender',
        product: 'productID',
        seller: 'userID',
        customer: 'userID',
    },
};
