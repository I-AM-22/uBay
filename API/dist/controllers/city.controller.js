"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCity = exports.updateCity = exports.createCity = exports.getCity = exports.getAllCities = void 0;
const city_model_1 = require("@models/city.model");
const handlerFactory_1 = require("@controllers/handlerFactory");
exports.getAllCities = (0, handlerFactory_1.getAll)(city_model_1.default);
exports.getCity = (0, handlerFactory_1.getOne)(city_model_1.default);
exports.createCity = (0, handlerFactory_1.createOne)(city_model_1.default);
exports.updateCity = (0, handlerFactory_1.updateOne)(city_model_1.default);
exports.deleteCity = (0, handlerFactory_1.deleteOne)(city_model_1.default);
//# sourceMappingURL=city.controller.js.map