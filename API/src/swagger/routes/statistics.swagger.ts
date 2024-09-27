/**
 * @swagger
 * components:
 *   schemas:
 *     CategoryStats:
 *       type: object
 *       properties:
 *         categoryCount:
 *           type: integer
 *           description: Number of items in this category
 *         avgPrice:
 *           type: number
 *           format: float
 *           description: Average price of items in this category
 *         minPrice:
 *           type: number
 *           format: float
 *           description: Minimum price of items in this category
 *         maxPrice:
 *           type: number
 *           format: float
 *           description: Maximum price of items in this category
 *         categoryName:
 *           type: string
 *           description: Name of the category
 *         categoryPercentage:
 *           type: number
 *           format: float
 *           description: Percentage of items in this category
 *
 *     StatisticsResponse:
 *       type: object
 *       properties:
 *         users:
 *           type: integer
 *           description: Number of users
 *         employees:
 *           type: integer
 *           description: Number of employees
 *         stores:
 *           type: integer
 *           description: Number of stores
 *         products:
 *           type: integer
 *           description: Number of products
 *         soldProducts:
 *           type: integer
 *           description: Number of sold products
 *         salesPercentage:
 *           type: number
 *           format: float
 *           description: Sales percentage
 *         salesPerCategory:
 *           type: array
 *           description: Sales per category
 *           items:
 *             $ref: '#/components/schemas/CategoryStats'
 */

/**
 * @swagger
 * tags:
 *   name: Statistics
 *   description: API to manage Statistics
 *
 * /statistics:
 *   get:
 *     summary: Get statistics data
 *     tags: [Statistics]
 *     security:
 *       - Bearer: []
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/StatisticsResponse'
 *       '401':
 *         $ref: '#/components/responses/401'
 *       '403':
 *         $ref: '#/components/responses/403'
 */
