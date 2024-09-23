"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_routes_1 = require("@routes/user.routes");
const product_routes_1 = require("@routes/product.routes");
const category_routes_1 = require("@routes/category.routes");
const comment_routes_1 = require("@routes/comment.routes");
const chat_routes_1 = require("@routes/chat.routes");
const message_routes_1 = require("@routes/message.routes");
const notification_routes_1 = require("@routes/notification.routes");
const store_routes_1 = require("@routes/store.routes");
const coupon_routes_1 = require("@routes/coupon.routes");
const admin_routes_1 = require("@routes/admin.routes");
const city_routes_1 = require("@routes/city.routes");
const employee_routes_1 = require("@routes/employee.routes");
const wallet_routes_1 = require("@routes/wallet.routes");
const payment_routes_1 = require("@routes/payment.routes");
const delivery_routes_1 = require("@routes/delivery.routes");
const profits_routes_1 = require("@routes/profits.routes");
const settings_1 = require("@config/settings");
const swaggerUi = require("swagger-ui-express");
const swagger_1 = require("../swagger/swagger");
const statistics_routes_1 = require("@routes/statistics.routes");
const port = settings_1.settings.PORT;
const router = (0, express_1.Router)();
const api = (0, express_1.Router)();
if (settings_1.settings.NODE_ENV === 'production') {
    router.get('/health', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        res.status(200).send({ status: 'success' });
    }));
}
api.use('/users', user_routes_1.default);
api.use('/products', product_routes_1.default);
api.use('/comments', comment_routes_1.default);
api.use('/categories', category_routes_1.default);
api.use('/stores', store_routes_1.default);
api.use('/cities', city_routes_1.default);
api.use('/employees', employee_routes_1.default);
api.use('/chats', chat_routes_1.default);
api.use('/messages', message_routes_1.default);
api.use('/notifications', notification_routes_1.default);
api.use('/coupons', coupon_routes_1.default);
api.use('/admins', admin_routes_1.default);
api.use('/wallets', wallet_routes_1.default);
api.use('/payments', payment_routes_1.default);
api.use('/deliveries', delivery_routes_1.default);
api.use('/statistics', statistics_routes_1.default);
api.use('/profits', profits_routes_1.default);
router.use('/api/v1', api);
router.use('/docs', swaggerUi.serve, swaggerUi.setup(swagger_1.default));
router.get('/docs.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swagger_1.default);
});
exports.default = router;
//# sourceMappingURL=index.routes.js.map