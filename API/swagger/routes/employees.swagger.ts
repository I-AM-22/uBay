/**
 * @swagger
 * tags:
 *   name: Employees
 *   description: API to manage Employees
 */

/**
 * @swagger
 * /employees:
 *   get:
 *     summary: Get All employees
 *     tags: [Employees]
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
 *         description: The list of employees
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/employeeSchema'
 *       '401':
 *         $ref: '#/components/responses/401'
 */

/**
 * @swagger
 * /employees/{id}:
 *   get:
 *     summary: Get a employees by ID
 *     tags: [Employees]
 *     security:
 *       - Bearer: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the employee
 *     responses:
 *       '200':
 *         description: ok
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/employeeName'
 *       '404':
 *         description: Comment not found
 *       '401':
 *         $ref: '#/components/responses/401'
 */

/**
 * @swagger
 * /employees:
 *   post:
 *     summary: Create a new employee
 *     tags: [Employees]
 *     security:
 *       - Bearer: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/employeeSchema'
 *     responses:
 *       '201':
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/employeeSchema'
 *       '401':
 *         $ref: '#/components/responses/401'
 *       '400':
 *         $ref: '#/components/responses/400'
 */

/**
 * @swagger
 * /employees/{id}:
 *   patch:
 *     summary: Update a employee by ID
 *     tags: [Employees]
 *     security:
 *       - Bearer: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the employee
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/employeeSchema'
 *     responses:
 *       '200':
 *         description: comment has been updated
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/employeeSchema'
 *       '404':
 *         description: Product not found
 *       '401':
 *         $ref: '#/components/responses/401'
 *       '400':
 *         $ref: '#/components/responses/400' 
 */

/**
* @swagger
* /employees/{id}:
*   delete:
*     summary: Delete a employee by ID
*     tags: [Employees]
*     security:
*       - Bearer: []
*     parameters:
*       - in: path
*         name: id
*         schema:
*           type: string
*         required: true
*         description: ID of the employee
*     responses:
*       '204':
*         $ref: '#/components/responses/204'
*       '404':
*         description: Comment not found
*       '401':
*         $ref: '#/components/responses/401'
*/

export const employeeSchema = {
    type: 'object',
    properties: {
        name: {
            type: 'string',
            description: 'The name of the store',
        },
        email: {
            type: 'string',
            description: 'The email of the employee',
        },
        password: {
            type: 'string',
            description: 'The password of the employee',
        },
        address: {
            type: 'string',
            description: 'The address of the employee',
        },
        city: {
            type: 'string',
            description: 'The ID of the city to which the employee belongs',
        },
        work_time: {
            type: 'string',
            description: 'time shift for employee',
        },
    },
    example: {
        name: 'employeeName',
        email: 'ibrahim@gmail.com',
        password: 'test1234',
        store: 'storeID',
        address: 'store address',
        phone_number: '094005673',
        work_time: 'work time',
    },
    required: ['name', 'email', 'password', 'store', 'address', 'phone_number', 'work_time'],
};