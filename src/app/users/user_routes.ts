import { NextFunction, Request, Response, Router } from "express";
import UserController from "./controller/user_controller";
//import { Schema, ValidateSchema } from "../../midleware/validations";
import passport from "passport";
const userRouter = Router();
var userController = new UserController();

function ensureAuthenticated(req: Request, res: Response, next: NextFunction){
  console.log(req.user);
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(404).send({ message: "you must login!" });
}

userRouter.post(
  "/register",
  ensureAuthenticated,
  //ValidateSchema(Schema.user.create),
  userController.createUser
);
userRouter.get("/users", userController.getAllUser);
userRouter.get("/users/:id", userController.getUserById);
userRouter.post("/users/:id", userController.getUserById);
userRouter.put("/users/:id", userController.updateUser);
userRouter.patch("/users/:id", userController.updateUser);
userRouter.delete("/users/:id", userController.deleteUser);

export default userRouter;
