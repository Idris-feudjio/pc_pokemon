import { Model } from "sequelize-typescript";
import { ICrudRepository } from "../interfaces/crud_interface";

export abstract class AbstractCrudRepository<T extends Model>
  implements ICrudRepository<T>
{
  protected abstract model: Model<T>;

 
  public async create(body: T): Promise<Model<T, T>> {
    return await body.save().then(model => {          
        return model;
    }) .catch(err=> {return err})
  }

  delete(id: string): Promise<void> {
   return this.model.destroy();
  }
  findById(id: string): Promise<T> {
    throw new Error("Method not implemented.");
  }
  listAll(): Promise<T[]> {
    throw new Error("Method not implemented.");
  }
  searchAll(
    parameterName: string,
    parameterValue: string,
    sortBy: string,
    order: number,
    pageSize: number,
    pageNumber: number
  ): Promise<T[]> {
    throw new Error("Method not implemented.");
  }
}
