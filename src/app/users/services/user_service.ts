import { Model } from "sequelize-typescript";
import User from "../models/user.model";
import { AbstractRepository } from "../../../public/repositories/abstract_crud_repositories";
import { NextFunction, RequestHandler, Response, Request } from "express";

export class UserService extends AbstractRepository<User> {
  constructor() {
    super(User);
  }
  async userLogin(req: Request, res: Response, next: NextFunction) {
    const { id } = req.body;
  }
  async logOut(req: Request, res: Response, next: NextFunction) {
    req.logout((err) => {
      console.log(err);
    });
  }
}
