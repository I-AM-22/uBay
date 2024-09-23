"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setIds = void 0;
const setIds = (id) => (req, res, next) => {
    var _a;
    if (!req.body.user) {
        req.body.user = (_a = req.user) === null || _a === void 0 ? void 0 : _a.id;
    }
    if (id && !req.body[id.slice(0, id.length - 2)]) {
        req.body[id.slice(0, id.length - 2)] = req.params[id];
    }
    next();
};
exports.setIds = setIds;
//# sourceMappingURL=helper.middleware.js.map