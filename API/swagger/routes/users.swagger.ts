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
 *       parameters:
 *        - name: params
 *          in: query
 *          description: page=1&limit=10&sort=+email&fields=+name,-photo
 *          required: false
 *          schema:
 *           type: object
 *           properties:
 *             page:
 *              type: integer
 *             limit:
 *              type: integer
 *             sort:
 *              type: string
 *             fields:
 *              type: string
 *             search:
 *              type: string
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
 *   /users/me:
 *     patch:
 *       summary: Update Current User
 *       tags: [Users]
 *       security:
 *         - Bearer: []
 *       requestBody:
 *         required: true
 *         content:
 *           multipart/form-data:
 *             schema:
 *              type: object
 *              properties:
 *                  name:
 *                   type: string
 *                  email:
 *                   type: string
 *                  photo:
 *                   type: string
 *                   format: binary
 *       responses:
 *         "400":
 *           $ref: '#/components/responses/400'
 *         "401":
 *           $ref: '#/components/responses/401'
 *         "200":
 *           description: User updated successfully
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *                     description: user updated successfully.
 */

//                                   Delete Current User
/**
 * @swagger
 *   /users/me:
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

/**
 * @swagger
 *   /users/favorites:
 *     patch:
 *       summary: choose favorites
 *       tags: [Users]
 *       security:
 *         - Bearer: []
 *       requestBody:
 *         required: true
 *         content:
 *            application/json:
 *             schema:
 *              $ref: '#/components/schemas/favoriteSchema'
 *       responses:
 *         "200":
 *           description: ok
 *         "400":
 *           $ref: '#/components/responses/400'
 *         "401":
 *           $ref: '#/components/responses/401'
 */
/** 
 * @swagger
 *   /users/activeToggle:
 *     patch:
 *       summary: active or disactive user
 *       tags: [Users]
 *       security:
 *         - Bearer: []
 *       requestBody:
 *         required: true
 *         content:
 *            application/json:
 *             schema:
 *              type : object
 *              properties:
 *               email:
 *                 type: string
 *                 description: user email
 *       responses:
 *         "200":
 *           description: ok
 *         "400":
 *           $ref: '#/components/responses/400'
 *         "401":
 *           $ref: '#/components/responses/401'
 */

//                                                   TODO: Admin routes
/**
 * @swagger
 *   /users/{id}:
 *     get:
 *       summary: Get User For Admin Access
 *       tags: [Users]
 *       security:
 *         - Bearer: []
 *       parameters:
 *         - name: id
 *           in: path
 *           description: ID of the user to retrieve
 *           required: true
 *           schema:
 *             type: string
 *       responses:
 *         "200":
 *           description: Get One User
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/User'
 *         "400":
 *           $ref: '#/components/responses/400'
 *         "401":
 *           $ref: '#/components/responses/401'
 */

/**
 * @swagger
 *   /users/{id}:
 *     delete:
 *       summary: Delete User For Admin Access
 *       security:
 *         - Bearer: []
 *       parameters:
 *        - name: id
 *          in: path
 *          description: ID of the user to retrieve
 *          required: true
 *       tags: [Users]
 *       responses:
 *         "400":
 *           $ref: '#/components/responses/400'
 *         "401":
 *           $ref: '#/components/responses/401'
 *         "204":
 *           description: User deleted successfully
 */

/**
 * @swagger
 *   /users/{id}:
 *     patch:
 *       summary: Update User For Admin Access
 *       tags: [Users]
 *       security:
 *         - Bearer: []
 *       parameters:
 *         - name: id
 *           in: path
 *           description: ID of the user to retrieve
 *           required: true
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *                 email:
 *                   type: string
 *       responses:
 *         "400":
 *           $ref: '#/components/responses/400'
 *         "401":
 *           $ref: '#/components/responses/401'
 *         "200":
 *           description: User updated successfully
 */
