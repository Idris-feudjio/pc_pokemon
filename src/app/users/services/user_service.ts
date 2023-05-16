import { Model } from "sequelize-typescript";
import AbstractDao from "../../../public/dao";
import User from "../models/user.model";

export class UserService extends AbstractDao<User> {
  constructor() {
    super(new User());
  }
  sigIn(){}
}
