import { Model } from "sequelize-typescript";
import User from "../models/user.model";

import { RequestHandler } from "express";
import { UserService } from "../services/user_service";

export default class UserController extends UserService {
  private userService = new UserService();

  createUser: RequestHandler = async (req, res, next) => {
    var user = await User.create(req.body);
    return res
      .status(200)
      .json({ message: "User created successfully", data: user });
  };

  updateUser: RequestHandler = async (req, res, next) => {
    const { id } = req.params;
    await User.update({ ...req.body }, { where: { id } });
    const updatedUser: User | null = await User.findOne({
      where: { id },
      attributes: ["id", "firstName", "lastName", "birthDay", "rightAccess"],
    });
    return res
      .status(200)
      .json({ message: "User updated successfully", data: updatedUser });
  };

  deleteUser: RequestHandler = async (req, res, next) => {
    const { id } = req.params;
    const user: User | null = await User.findByPk(id);
    if (user) {
      await User.destroy({ where: { id } });
      return res.status(200).json({ message: "User deleted successfully" });
    } else {
      res.status(504).json({ message: "User Not Found" });
    }
  };

  getAllUser: RequestHandler = async (req, res, next) => {
    const allUser: User[] = await User.findAll({
      attributes: ["id", "firstName", "lastName", "birthDay", "rightAccess"],
    });
    return res
      .status(200)
      .json({ message: "User fetched successfully", data: allUser });
  };

  getUserById: RequestHandler = async (req, res, next) => {
    const { id } = req.params;
    const user: User | null = await User.findByPk(id);
    return res
      .status(200)
      .json({ message: "User fetched successfully", data: user });
  };
}
