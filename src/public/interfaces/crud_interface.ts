export interface ICrudRepository<M> {
  create(body: M): unknown;
  delete(id: string): unknown;
  findById(id: string): unknown;
  listAll(): unknown;
  searchAll(
    parameterName: string,
    parameterValue: string,
    sortBy: string,
    order: number,
    pageSize: number,
    pageNumber: number
  ): unknown;
}
