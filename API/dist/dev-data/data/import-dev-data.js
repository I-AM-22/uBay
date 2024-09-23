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
const dotenv_1 = require("dotenv");
const mongoose_1 = require("mongoose");
const users_json_1 = require("./users.json");
const user_model_1 = require("../../models/user.model");
(0, dotenv_1.config)({ path: './../../.env' });
const DB = process.env.DATABASE_LOCAL || '';
mongoose_1.default.connect(DB).then(() => console.log('DB connection successes'));
const importData = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield user_model_1.default.create(users_json_1.default);
        console.log('imported');
    }
    catch (err) {
        console.log(err);
    }
    process.exit();
});
const deleteData = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield user_model_1.default.deleteMany();
        console.log('deleted');
    }
    catch (err) {
        console.log(err);
    }
    process.exit();
});
if (process.argv[2] === '--import') {
    importData();
}
else if (process.argv[2] === '--delete') {
    deleteData();
}
//# sourceMappingURL=import-dev-data.js.map