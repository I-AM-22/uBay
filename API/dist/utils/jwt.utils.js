"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signJwt = signJwt;
const settings_1 = require("@config/settings");
const jsonwebtoken_1 = require("jsonwebtoken");
function signJwt(id) {
    const privateKey = settings_1.settings.JWT_PRIVATE_KEY;
    const signature = Buffer.from(privateKey, 'base64').toString('ascii');
    const options = {
        expiresIn: settings_1.settings.JWT_EXPIRES_IN,
        algorithm: 'RS256',
    };
    return jsonwebtoken_1.default.sign({ id }, signature, options);
}
//# sourceMappingURL=jwt.utils.js.map