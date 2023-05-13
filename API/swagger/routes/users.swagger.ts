/**
 * @swagger
 * tags:
 *  name: Users
 *  description: API to manage users
 */ 

//                                    Get All Users

/**
 * @swagger
 *   /users:
 *     get:
 *       summary: Get All Users
 *       tags: [Users]
 *       security:
 *         - bearerAuth: []
 *       responses:
 *         "200":
 *           description: The list of Users
 *           content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/User'
 *         "400":
 *           $ref: '#/components/responses/400'
 *         "401":
 *           $ref: '#/components/responses/401'
 */

//                                    Get Current User

/**
 * @swagger
 *   /users/me:
 *     get:
 *       summary: Get Current User
 *       tags: [Users]
 *       security:
 *         - bearerAuth: []
 *       responses:
 *         "200":
 *           description: The list of Users
 *           content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/User'
 *         "400":
 *           $ref: '#/components/responses/400'
 *         "401":
 *           $ref: '#/components/responses/401'
 */

//                                 Update Current User
/**
 * @swagger
 *   /users/updateMe:
 *     patch:
 *       summary: Update Current User
 *       tags: [Users]
 *       security:
 *         - bearerAuth: []
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 email:
 *                   type: string
 *                 photo:
 *                   type: string
 *       responses:
 *         "400":
 *           $ref: '#/components/responses/400'
 *         "401":
 *           $ref: '#/components/responses/401'
 *         "204":
 *           description: User updated successfully
 *           content:
 *             application/json
 */

//                                   Delete Current User
/**
 * @swagger
 *   /Users/deleteMe:
 *     delete:
 *       summary: Delete Current User
 *       security:
 *         - bearerAuth: []
 *       tags: [Users]
 *       responses:
 *         "400":
 *           $ref: '#/components/responses/400'
 *         "401":
 *           $ref: '#/components/responses/401'
 *         "204":
 *           description: User deleted successfully
 */