import { Model } from "sequelize-typescript";
import { AbstractCrudRepository } from "./repositories/abstract_crud_repositories";
 

export default class AbstractDao<
  T extends Model
> extends AbstractCrudRepository<T> {
  constructor(protected model: Model<T>) {
    super();
    this.model = model;
  }
}
