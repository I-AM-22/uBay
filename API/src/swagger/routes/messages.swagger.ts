/**
 * @swagger
 * tags:
 *   name: Messages
 *   description: API to manage Messages
 */

/**
 * @swagger
 * /chats/{chatId}/messages:
 *   get:
 *     summary: Get All Messages
 *     tags:
 *       - Messages
 *     security:
 *       - Bearer: []
 *     parameters:
 *       - in: path
 *         name: chatId
 *         schema:
 *           type: string
 *         required: true
 *       - in: query
 *         name: params
 *         required: false
 *         schema:
 *           type: object
 *           properties:
 *             page:
 *               type: string
 *             limit:
 *               type: string
 *     responses:
 *       '200':
 *         description: The list of Messages
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/messageSchema'
 *       '401':
 *         description: Unauthorized
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/responses/Unauthorized'
 */

/**
 * @swagger
 * /chats/{chatId}/messages/{id}:
 *   get:
 *     summary: Get Message
 *     tags:
 *       - Messages
 *     security:
 *       - Bearer: []
 *     parameters:
 *       - in: path
 *         name: chatId
 *         schema:
 *           type: string
 *         required: true
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *       - in: query
 *         name: params
 *         required: false
 *         schema:
 *           type: object
 *           properties:
 *             page:
 *               type: string
 *             limit:
 *               type: string
 *     responses:
 *       '200':
 *         description: The list of Messages
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/messageSchema'
 *       '401':
 *         description: Unauthorized
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/responses/Unauthorized'
 */


/**
 * @swagger
 * /chats/{chatId}/messages:
 *   post:
 *     summary: Create a new message
 *     tags: [Messages]
 *     security:
 *       - Bearer: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/messagesSchema'
 *     responses:
 *       '201':
 *         description: Created. The new message is successfully created.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/messagesSchema'
 *       '401':
 *         description: Unauthorized. Authentication credentials are missing or invalid.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/responses/Unauthorized'
 *       '400':
 *         description: Bad Request. The request is invalid or missing required data.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/responses/BadRequest'
 */

/**
 * @swagger
 * /chats/{chatId}/messages/{id}:
 *   patch:
 *     summary: Update a message by ID
 *     tags: [Messages]
 *     security:
 *       - Bearer: []
 *     parameters:
 *       - in: path
 *         name: chatId
 *         schema:
 *           type: string
 *         required: true
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the messages
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/messagesSchema'
 *     responses:
 *       '200':
 *         description: chat has been updated
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/messagesSchema'
 *       '404':
 *         description: chat not found
 *       '401':
 *         $ref: '#/components/responses/401'
 *       '400':
 *         $ref: '#/components/responses/400' 
 */

/**
* @swagger
* /chats/{chatId}/messages/{id}:
*   delete:
*     summary: Delete a meessage by ID
*     tags: [Messages]
*     security:
*       - Bearer: []
*     parameters:
*       - in: path
*         name: chatId
*         schema:
*           type: string
*         required: true
*       - in: path
*         name: id
*         schema:
*           type: string
*         required: true
*         description: ID of the messages
*     responses:
*       '204':
*         $ref: '#/components/responses/204'
*       '404':
*         description: Comment not found
*       '401':
*         $ref: '#/components/responses/401'
*/

export const messagesSchema = {
    type: 'object',
    properties: {
        content: {
            type: 'string',
            description: 'content of the message',
        },
        chat: {
            type: 'string',
            description: 'ChatID',
        },
        user: {
            type: 'string',
            description: 'the user who write the message',
        }
    },
    example: {
        content: 'lalalalb',
        chat: 'chatId',
        user: 'userID',
    },
    required: ['content','chat', 'user'],
};