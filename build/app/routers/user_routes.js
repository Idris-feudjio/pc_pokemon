"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../users/controller/user_controller");
const router = (0, express_1.Router)();
router.post("/register", user_controller_1.createUser);
router.get("/users", user_controller_1.getAllUser);
router.get("/users/:id", user_controller_1.getUserById);
router.put("/users/:id", user_controller_1.updateUser);
router.patch("/users/:id", user_controller_1.updateUser);
router.delete("/users/:id", user_controller_1.deleteUser);
exports.default = router;
//# sourceMappingURL=user_routes.js.map