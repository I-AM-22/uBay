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
 *     tags: [Wallet]
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
 *           example:
 *              amount: 100
 *     responses:
 *       200:
 *         description: Wallet charged successfully
 *       400:
 *         description: Invalid request body
 *       401:
 *         description: Unauthorized - Invalid token
 *       403:
 *         description: Forbidden - User not allowed to perform this action
 *       500:
 *         description: Internal server error
 */
