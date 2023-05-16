"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = __importDefault(require("./controller/user_controller"));
const user_controller_2 = require("./controller/user_controller");
const userRouter = (0, express_1.Router)();
var userController = new user_controller_1.default();
userRouter.post("/register", userController.createUser);
userRouter.get("/users", user_controller_2.getAllUser);
userRouter.get("/users/:id", user_controller_2.getUserById);
userRouter.put("/users/:id", user_controller_2.updateUser);
userRouter.patch("/users/:id", user_controller_2.updateUser);
userRouter.delete("/users/:id", user_controller_2.deleteUser);
exports.default = userRouter;
//# sourceMappingURL=user_routes.js.map