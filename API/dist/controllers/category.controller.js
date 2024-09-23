"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCategory = exports.updateCategory = exports.createCategory = exports.getCategory = exports.getAllCategories = void 0;
const category_model_1 = require("@models/category.model");
const handlerFactory_1 = require("@controllers/handlerFactory");
exports.getAllCategories = (0, handlerFactory_1.getAll)(category_model_1.default);
exports.getCategory = (0, handlerFactory_1.getOne)(category_model_1.default);
exports.createCategory = (0, handlerFactory_1.createOne)(category_model_1.default);
exports.updateCategory = (0, handlerFactory_1.updateOne)(category_model_1.default);
exports.deleteCategory = (0, handlerFactory_1.deleteOne)(category_model_1.default);
//# sourceMappingURL=category.controller.js.map