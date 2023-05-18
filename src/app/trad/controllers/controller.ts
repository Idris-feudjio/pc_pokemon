import { RequestHandler } from "express";
import Trad from "../../users/models/user.model";
import ServiceTrade from "../services/service_trad";

export default class UserController extends ServiceTrade {
    private userService = new ServiceTrade();
  
    createUser: RequestHandler = async (req, res, next) => {
      var trad = await Trad.create(req.body);
      return res
        .status(200)
        .json({ message: "Trad created successfully", data: trad });
    };
  
    updateUser: RequestHandler = async (req, res, next) => {
      const { id } = req.params;
      await Trad.update({ ...req.body }, { where: { id } });
      const updatedUser: Trad | null = await Trad.findOne({
        where: { id },
        attributes: [],
      });
      return res
        .status(200)
        .json({ message: "Trad updated successfully", data: updatedUser });
    };
  
    deleteUser: RequestHandler = async (req, res, next) => {
      const { id } = req.params;
      const user: Trad | null = await Trad.findByPk(id);
      if (user) {
        await Trad.destroy({ where: { id } });
        return res.status(200).json({ message: "User deleted successfully" });
      } else {
        res.status(504).json({ message: "User Not Found" });
      }
    };
  
    getAllUser: RequestHandler = async (req, res, next) => {
      const allUser: Trad[] = await Trad.findAll({
        attributes: ["id", "firstName", "lastName", "birthDay", "rightAccess"],
      });
      return res
        .status(200)
        .json({ message: "User fetched successfully", data: allUser });
    };
  
    getUserById: RequestHandler = async (req, res, next) => {
      const { id } = req.params;
      const user: Trad | null = await Trad.findByPk(id);
      return res
        .status(200)
        .json({ message: "User fetched successfully", data: user });
    };
  }