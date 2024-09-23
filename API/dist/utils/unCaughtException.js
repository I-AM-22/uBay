"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
dotenv.config();
exports.default = process.on('uncaughtException', (err) => {
    console.log('UNCAUGHT EXCEPTION Shutting down...');
    console.log(err);
    process.exit(1);
});
//# sourceMappingURL=unCaughtException.js.map