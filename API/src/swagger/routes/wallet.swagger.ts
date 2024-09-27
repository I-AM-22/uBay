/**
 * @swagger
 * tags:
 *  name: Wallets
 *  description: API to manage Wallets
 */
/**
 * @swagger
 * /wallets/chargeMyWallet:
 *   post:
 *     summary: Charge wallet
 *     tags: [Wallets]
 *     security:
 *       - Bearer: []
 *     requestBody:
 *       description: Wallet charge data
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               amount:
 *                 type: number
 *               userId:
 *                 type: string
 *           example:
 *             amount: 100
 *             userId: user_Id
 *     responses:
 *       '200':
 *         description: Wallet charged successfully
 *       '400':
 *         description: Invalid request body
 *       '401':
 *         description: Unauthorized - Invalid token
 *       '403':
 *         description: Forbidden - User not allowed to perform this action
 *       '500':
 *         description: Internal server error
 */
