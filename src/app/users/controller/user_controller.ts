import { Model } from "sequelize-typescript";
import AbstractDao from "../../../public/dao";
import { AbstractCrudRepository } from "../../../public/repositories/abstract_crud_repositories";
import User from "../models/user.model";

import { RequestHandler } from "express";
import { UserService } from "../services/user_service";

export default class UserController extends UserService {
  createUser: RequestHandler = async (req, res, next) => {
    var user = await User.create({ ...req.body });
    return res
      .status(200)
      .json({ message: "User created successfully", data: user });
  };
}

export const deleteUser: RequestHandler = async (req, res, next) => {
  const { id } = req.params;
  const deletedUser: User | null = await User.findByPk(id);
  await User.destroy({ where: { id } });
  return res
    .status(200)
    .json({ message: "User deleted successfully", data: deletedUser });
};

export const getAllUser: RequestHandler = async (req, res, next) => {
  const allUser: User[] = await User.findAll();
  return res
    .status(200)
    .json({ message: "User fetched successfully", data: allUser });
};

export const getUserById: RequestHandler = async (req, res, next) => {
  const { id } = req.params;
  const user: User | null = await User.findByPk(id);
  return res
    .status(200)
    .json({ message: "User fetched successfully", data: user });
};

export const updateUser: RequestHandler = async (req, res, next) => {
  const { id } = req.params;
  await User.update({ ...req.body }, { where: { id } });
  const updatedUser: User | null = await User.findByPk(id);
  return res
    .status(200)
    .json({ message: "User updated successfully", data: updatedUser });
};
