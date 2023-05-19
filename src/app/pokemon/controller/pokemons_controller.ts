import { Pokemons } from "../model/pokemon_model";

import { RequestHandler } from "express";
import { PokemonsService } from "../services/pokemon_services";
import getPagingData from "../../../helpers/paginations";
import User from "../../users/models/user.model";
import { log } from "console";

export default class PokemonsController extends PokemonsService {
  private pokemonsService = new PokemonsService();

  createPokemons: RequestHandler = async (req, res, next) => {
    const { userId } = req.params;
    const user = await User.findByPk(userId);
    if (user) {
      const request = { ...req.body };
      request["userId"] = userId;
      var pokemons = await Pokemons.create(request);
      if (pokemons) {
        return res
          .status(200)
          .json({ message: "Pokemons created successfully", data: pokemons });
      }
      return res.json({ message: "ERROR" });
    } else {
      res.status(504).json({ message: "User Not Found" });
    }
  };

  deletePokemons: RequestHandler = async (req, res, next) => {
    const { id } = req.params;
    const deletedPokemons: Pokemons | null = await Pokemons.findByPk(id);
    await Pokemons.destroy({ where: { id } });
    return res.status(200).json({
      message: "Pokemons deleted successfully",
      data: deletedPokemons,
    });
  };

  getAllPokemons: RequestHandler = async (req, res, next) => {
    const allPokemons: Pokemons[] = await Pokemons.findAll();
    return res
      .status(200)
      .json({ message: "Pokemons fetched successfully", data: allPokemons });
  };

  getPokemonsById: RequestHandler = async (req, res, next) => {
    const { id } = req.params;
    const pokemons: Pokemons | null = await Pokemons.findByPk(id);
    return res
      .status(200)
      .json({ message: "Pokemons fetched successfully", data: pokemons });
  };

  updatePokemons: RequestHandler = async (req, res, next) => {
    const { userId, id } = req.params;
    const user = await Pokemons.findOne({ where: { userId } });
    if (user) {
      await Pokemons.update({ ...req.body }, { where: { id } });
      const updatedPokemons: Pokemons | null = await Pokemons.findByPk(id);
      return res.status(200).json({
        message: "Pokemons updated successfully",
        data: updatedPokemons,
      });
    } else {
      res.status(504).json({ message: "User Not Found" });
    }
  };

  getUserPokemons: RequestHandler = async (req, res, next) => {
    const { userId } = req.params;
    const pokemons: Pokemons | null = await this.pokemonsService.findOne({
      userId: parseInt(userId),
    });
    return res
      .status(200)
      .json({ message: "Pokemons fetched successfully", data: pokemons });
  };

  findAllPokemonPaginate: RequestHandler = async (req, res, next) => {
    const { page, pageSize, qurey } = req.body;
    const { userId } = req.params;

    const pokemons = await Pokemons.findAndCountAll({
      where: { ...qurey, userId: userId },
      limit: pageSize ?? 20,
      offset: page ?? 0,
    });
    const allPokemons = getPagingData(pokemons, page ?? 0, pageSize ?? 20);
    return res
      .status(200)
      .json({ message: "Pokemons fetched successfully", data: allPokemons });
  };
}
