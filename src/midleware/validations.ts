import { NextFunction, Response, Request } from "express";
import Joi, { ObjectSchema, string } from "joi";
import { Logging } from "../helpers/logging";
import IUser from "../app/users/models/interfaces/user";

export const ValidateSchema = (schema: ObjectSchema) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.validateAsync(req.body);
      next();
    } catch (error) {
      Logging.error(error);
      return res.status(422).json({ error });
    }
  };
};

export const Schema = {
  user: {
    create: Joi.object<IUser>({
      firstName: Joi.string().required(),
      lastName: Joi.string(),
      birthDay: Joi.date(),
      login: Joi.string().required(),
      password: Joi.string().required(),
      rightAccess: Joi.string(),
      pokemons: Joi.array(),
      trad: Joi.array(),
    }).options({ stripUnknown: true }),
    update: Joi.object<IUser>({}).options({
      allowUnknown: true,
      stripUnknown: true,
    }),
  },
  pokemons: {
    create: Joi.object<IPokemons>({
      name: Joi.string().required(),
      espece: Joi.string().required(),
      userId: Joi.number().required(),
      chrome: Joi.string(),
      gender: Joi.string(),
      heigth: Joi.number(),
      level: Joi.number(),
    }).options({ stripUnknown: true }),
    update: Joi.object<IPokemons>({
      name: Joi.string().required(),
      espece: Joi.string().required(),
      chrome: Joi.string(),
      gender: Joi.string(),
      heigth: Joi.number(),
      level: Joi.number().min(1).max(100),
    }).options({ allowUnknown: true, stripUnknown: true }),
  },
};
