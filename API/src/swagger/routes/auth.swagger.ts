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
 *               $ref: '#/components/schemas/signUp'
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
 *       summary: login an user
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
 *         "200":
 *           description: admin logged in successfully
 *           contents:
 *             application/json
 */

//NOTE                                                        forgotPassword
/**
 * @swagger
 *   /users/forgotPassword:
 *     post:
 *       summary: forgot password
 *       tags: [Auth]
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               required:
 *                 - email
 *               properties:
 *                 email:
 *                   type: string
 *       responses:
 *         "400":
 *           $ref: '#/components/responses/400'
 *         "200":
 *           description: reset password token has been sent
 *           contents:
 *             application/json
 */

//NOTE                                              resetpassword
/**
 * @swagger
 *   /users/resetPassword:
 *     patch:
 *       summary: forgot password
 *       tags: [Auth]
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               required:
 *                 - email
 *                 - token
 *               properties:
 *                 token:
 *                   type: string
 *                 password:
 *                   type: string
 *       responses:
 *         "400":
 *           $ref: '#/components/responses/400'
 *         "200":
 *           description: Password has been updated successfully
 *         "500":
 *           description: There was an error sending the email. Try again later
 *           contents:
 *             application/json
 */

//NOTE                                       updateMyPassword

/**
 * @swagger
 *   /users/updateMyPassword:
 *     patch:
 *       summary: Update Current User
 *       tags: [Auth]
 *       security:
 *         - Bearer: []
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *              type: object
 *              properties:
 *                  passwordCurrent:
 *                   type: string
 *                  password:
 *                   type: string
 *       responses:
 *         "400":
 *           $ref: '#/components/responses/400'
 *         "401":
 *           $ref: '#/components/responses/401'
 *         "200":
 *           description: Password has been updated successfully
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *                     description: Password has been updated successfully
 */

export const updateMe = {
  type: 'object',
  properties: {
    name: { type: 'string' },
    email: { type: 'string' },
  },
  example: {
    name: 'bahaa',
    email: 'bahaa@gmail.com',
  },
};
export const signUp = {
  type: 'object',
  required: ['name', 'email', 'password'],
  properties: {
    name: { type: 'string' },
    email: { type: 'string' },
    password: { type: 'string' },
  },
  example: {
    name: 'bahaa',
    email: 'bahaa@gmail.com',
    password: 'test1234',
  },
};
