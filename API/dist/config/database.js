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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const settings_1 = require("./settings");
const DB = settings_1.settings.NODE_ENV === 'production'
    ? (_a = settings_1.settings.DB.DATABASE) === null || _a === void 0 ? void 0 : _a.replace('<PASSWORD>', settings_1.settings.DB.PASSWORD)
    : settings_1.settings.DB.DATABASE_LOCAL;
const ConnDB = () => __awaiter(void 0, void 0, void 0, function* () {
    return mongoose_1.default
        .connect(DB)
        .then(() => console.log('DB connection succeeded'))
        .catch(() => console.log('Mongo connection error'));
});
exports.default = ConnDB;
//# sourceMappingURL=database.js.map