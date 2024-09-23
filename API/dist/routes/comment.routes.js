"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const comment_controller_1 = require("@controllers/comment.controller");
const auth_middleware_1 = require("@middlewares/auth.middleware");
const passport = require("passport");
const validateResource_1 = require("@middlewares/validateResource");
const comment_schema_1 = require("./../schema/comment.schema");
const helper_middleware_1 = require("@middlewares/helper.middleware");
const router = (0, express_1.Router)({ mergeParams: true });
router.use(passport.authenticate('jwt', { session: false, failWithError: true }));
router
    .route('/')
    .get(comment_controller_1.getAllComments)
    .post((0, auth_middleware_1.restrictTo)('user'), (0, helper_middleware_1.setIds)('productId'), (0, validateResource_1.default)(comment_schema_1.commentSchema), comment_controller_1.createComment);
router
    .route('/:id')
    .get(comment_controller_1.getComment)
    .patch(comment_controller_1.checkIsOwnerComment, comment_controller_1.updateComment)
    .delete(comment_controller_1.checkIsOwnerComment, comment_controller_1.deleteComment);
exports.default = router;
//# sourceMappingURL=comment.routes.js.map