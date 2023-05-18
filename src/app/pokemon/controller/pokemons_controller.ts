import { Pokemons } from "../model/pokemon_model";

import { RequestHandler } from "express";
import { PokemonsService } from "../services/pokemon_services";

export default class PokemonsController extends PokemonsService {}

export const createPokemons: RequestHandler = async (req, res, next) => {
  var pokemons = await Pokemons.create({ ...req.body });
  if (pokemons) {
    return res
      .status(200)
      .json({ message: "Pokemons created successfully", data: pokemons });
  }
  return res.json({ message: "ERROR" });
};

export const deletePokemons: RequestHandler = async (req, res, next) => {
  const { id } = req.params;
  const deletedPokemons: Pokemons | null = await Pokemons.findByPk(id);
  await Pokemons.destroy({ where: { id } });
  return res
    .status(200)
    .json({ message: "Pokemons deleted successfully", data: deletedPokemons });
};

export const getAllPokemons: RequestHandler = async (req, res, next) => {
  const allPokemons: Pokemons[] = await Pokemons.findAll();
  return res
    .status(200)
    .json({ message: "Pokemons fetched successfully", data: allPokemons });
};

export const getPokemonsById: RequestHandler = async (req, res, next) => {
  const { id } = req.params;
  const pokemons: Pokemons | null = await Pokemons.findByPk(id);
  return res
    .status(200)
    .json({ message: "Pokemons fetched successfully", data: pokemons });
};

export const updatePokemons: RequestHandler = async (req, res, next) => {
  const { userId, id } = req.params;
  const user = await Pokemons.findOne({ where: { userId } });
  if (user) {
    await Pokemons.update({ ...req.body }, { where: { id } });
    const updatedPokemons: Pokemons | null = await Pokemons.findByPk(id);
    return res
      .status(200)
      .json({
        message: "Pokemons updated successfully",
        data: updatedPokemons,
      });
  } else {
    res.status(504).json({ message: "User Not Found" });
  }
};
