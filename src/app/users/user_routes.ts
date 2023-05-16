import { Router } from "express";
import UserController from "./controller/user_controller";
import {
  //createUser,
  deleteUser,
  getAllUser,
  getUserById,
  updateUser,
} from "./controller/user_controller";
import User from "./models/user.model";

const userRouter = Router();
var userController = new UserController();

userRouter.post("/register", userController.createUser);
userRouter.get("/users", getAllUser);
userRouter.get("/users/:id", getUserById);
userRouter.put("/users/:id", updateUser);
userRouter.patch("/users/:id", updateUser);
userRouter.delete("/users/:id", deleteUser);

export default userRouter;
