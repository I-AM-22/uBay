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
 *         - Bearer: []
 *       responses:
 *         "200":
 *           description: The list of Users
 *           content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/updateMe'
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
 *         - Bearer: []
 *       responses:
 *         "200":
 *           description: The user info
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   name:
 *                      type: string
 *                   email:
 *                      type: string
 *                  
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
 *         - Bearer: []
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *              type: object
 *              properties:
 *                  name:
 *                   type: string
 *                  email:
 *                   type: string
 *
 *       responses:
 *         "400":
 *           $ref: '#/components/responses/400'
 *         "401":
 *           $ref: '#/components/responses/401'
 *         "200":
 *           description: User updated successfully
 *           contents:
 *             application/json
 */

//                                   Delete Current User
/**
 * @swagger
 *   /users/deleteMe:
 *     delete:
 *       summary: Delete Current User
 *       security:
 *         - Bearer: []
 *       tags: [Users]
 *       responses:
 *         "400":
 *           $ref: '#/components/responses/400'
 *         "401":
 *           $ref: '#/components/responses/401'
 *         "204":
 *           description: User deleted successfully
 */
