import { Router } from "express";
import CreateUserDto from "./dtos/create_user_dto";
import {
  createUser,
  deleteUser,
  getAllUser,
  getUserById,
  updateUser,
} from "./controller/user_controller";

const userRouter = Router(); 

userRouter.post("/register", createUser);
userRouter.get("/users", getAllUser);
userRouter.get("/users/:id", getUserById);
userRouter.put("/users/:id", updateUser);
userRouter.patch("/users/:id", updateUser);
userRouter.delete("/users/:id", deleteUser);

export default userRouter;
