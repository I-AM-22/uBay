"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllAdmins = exports.getAdmin = exports.updateAdmin = exports.deleteAdmin = exports.createAdmin = void 0;
const user_model_1 = require("@models/user.model");
const handlerFactory_1 = require("@controllers/handlerFactory");
exports.createAdmin = (0, handlerFactory_1.createOne)(user_model_1.default, { role: 'admin' });
exports.deleteAdmin = (0, handlerFactory_1.deleteOne)(user_model_1.default);
exports.updateAdmin = (0, handlerFactory_1.updateOne)(user_model_1.default);
exports.getAdmin = (0, handlerFactory_1.getOne)(user_model_1.default);
exports.getAllAdmins = (0, handlerFactory_1.getAll)(user_model_1.default, 'admin');
//# sourceMappingURL=admin.controller.js.map