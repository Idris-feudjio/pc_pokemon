"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = __importDefault(require("./controller/user_controller"));
const validations_1 = require("../../midleware/validations");
const userRouter = (0, express_1.Router)();
var userController = new user_controller_1.default();
function ensureAuthenticated(req, res, next) {
    console.log(req.user);
    if (req.user) {
        return next();
    }
    res.status(404).send({ message: "you must login!" });
}
userRouter.post("/register", (0, validations_1.ValidateSchema)(validations_1.Schema.user.create), userController.createUser);
userRouter.get("/users", userController.getAllUser);
userRouter.get("/users/:id", userController.getUserById);
userRouter.post("/users/:id", userController.getUserById);
userRouter.put("/users/:id", userController.updateUser);
userRouter.patch("/users/:id", userController.updateUser);
userRouter.delete("/users/:id", userController.deleteUser);
exports.default = userRouter;
//# sourceMappingURL=user_routes.js.map