"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("./controller/user_controller");
const userRouter = (0, express_1.Router)();
userRouter.post("/register", user_controller_1.createUser);
userRouter.get("/users", user_controller_1.getAllUser);
userRouter.get("/users/:id", user_controller_1.getUserById);
userRouter.put("/users/:id", user_controller_1.updateUser);
userRouter.patch("/users/:id", user_controller_1.updateUser);
userRouter.delete("/users/:id", user_controller_1.deleteUser);
exports.default = userRouter;
//# sourceMappingURL=user_routes.js.map