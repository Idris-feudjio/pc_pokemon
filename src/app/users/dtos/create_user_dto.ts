import { Optional } from "sequelize";
import IUser from "../models/interfaces/user";

type CreateUserDto = Optional<IUser,"birthDay"> 