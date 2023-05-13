//                                                      signup
/**
 * @swagger
 * tags:
 *  name: Auth
 *  description: API to authentication users
 */ 
/**
 * @swagger
 *   /users/signup:
 *     post:
 *       summary: Create a user
 *       tags: [Auth]
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       responses:
 *         "400":
 *           $ref: '#/components/responses/400'
 *         "401":
 *           $ref: '#/components/responses/401'
 *         "201":
 *           description: user created successfully
 *           contents:
 *             application/json
 *  
 */


//                                                      login

/**
 * @swagger
 *   /users/login:
 *     post:
 *       summary: login a user
 *       tags: [Auth]
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
 *         "401":
 *           $ref: '#/components/responses/401'
 *         "201":
 *           description: user login successfully
 *           contents:
 *             application/json
 */