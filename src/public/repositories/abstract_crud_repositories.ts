import { Attributes, Model, ModelStatic, WhereOptions } from "sequelize";

export class AbstractRepository<T extends Model> {
  private model: ModelStatic<T>;

  constructor(model: ModelStatic<T>) {
    this.model = model;
  }

  async findAll(): Promise<T[]> {
    return this.model.findAll();
  }

  async findById(id: number): Promise<T | null> {
    return this.model.findByPk(id);
  }

  async findOne(field: Partial<T>, options?: string[]): Promise<T | null> {
    return this.model.findOne({ where: { field }, attributes: options });
  }

  async findAllAndPaginate(
    params:{field?: any,
    projections?: string[],
    limit?: number,
    offset?: number}
  ): Promise<{
    rows: T[];
    count: number;
  }> {
    return this.model.findAndCountAll({
      where: { ...params.field},
      attributes: params.projections,
      limit: params.limit,
      offset: params.offset,
    });
  }

  async create(data: any): Promise<T> {
    return this.model.create(data);
  }

  // async update(
  //   id: WhereOptions<Attributes<T>>| undefined,
  //   data: object
  // ): Promise<[number, T[]]> {
  //   return this.model.update(data, { where: [id] });
  // }
  func() {}

  async delete(
    where: WhereOptions<Attributes<T>> | undefined
  ): Promise<number> {
    return this.model.destroy({ where: where });
  }
}
