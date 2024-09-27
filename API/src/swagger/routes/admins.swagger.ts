/**
 * @swagger
 * tags:
 *   name: Admins
 *   description: Admin management
 */

/**
 * @swagger
 *   /admins/login:
 *     post:
 *       summary: login an admin
 *       tags: [Admins]
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               required:
 *                 - email
 *                 - password
 *               properties:
 *                 email:
 *                   type: string
 *                 password:
 *                   type: string
 *       responses:
 *         "400":
 *           $ref: '#/components/responses/400'
 *         "200":
 *           description: user logged in successfully
 *           contents:
 *             application/json
 */

/**
 * @swagger
 * /admins:
 *   get:
 *     summary: Get all admins
 *     tags: [Admins]
 *     parameters:
 *      - name: params
 *        in: query
 *        description: page=1&limit=10&sort=+name,-email&fields=+name,-role
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
 *     security:
 *       - Bearer: []
 *     responses:
 *      '200':
 *         description: The list of admins
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/signUp'
 * */

/**
 * @swagger
 * /admins/{id}:
 *   get:
 *     summary: Get a specific admin
 *     tags: [Admins]
 *     parameters:
 *       - name: id
 *         in: path
 *         description: Admin ID
 *         required: true
 *         schema:
 *           type: string
 *     security:
 *       - Bearer: []
 *     responses:
 *       '401':
 *         $ref: '#/components/responses/401'
 *       '404':
 *         $ref: '#/components/responses/404'
 *       '200':
 *         $ref: '#/components/responses/200'
 */

/**
 * @swagger
 * /admins:
 *   post:
 *     summary: Create a new admin
 *     tags: [Admins]
 *     security:
 *       - Bearer: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/signUp'
 *     responses:
 *       '401':
 *         $ref: '#/components/responses/401'
 *       '400':
 *         $ref: '#/components/responses/400'
 *       '403':
 *         $ref: '#/components/responses/403'
 *       '201':
 *         $ref: '#/components/responses/201'
 */

/**
 * @swagger
 * /admins/{id}:
 *   patch:
 *     summary: Update an admin
 *     tags: [Admins]
 *     security:
 *       - Bearer: []
 *     parameters:
 *       - name: id
 *         in: path
 *         description: Admin ID
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/signUp'
 *     responses:
 *       '400':
 *         $ref: '#/components/responses/400'
 *       '401':
 *         $ref: '#/components/responses/401'
 *       '403':
 *         $ref: '#/components/responses/403'
 *       '404':
 *         $ref: '#/components/responses/404'
 *       '200':
 *         $ref: '#/components/responses/201'
 */

/**
 * @swagger
 * /admins/{id}:
 *   delete:
 *     summary: Delete an admin
 *     tags: [Admins]
 *     security:
 *       - Bearer: []
 *     parameters:
 *       - name: id
 *         in: path
 *         description: Admin ID
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: OK
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden
 *       404:
 *         description: Not Found
 */
