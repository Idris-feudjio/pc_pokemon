const getPagingData = (data: any, page: number, limit: number) => {
  const { count: totalItems, rows: pokemons } = data;
  const currentPage = page ? +page : 0;
  const totalPages = Math.ceil(totalItems / limit);

  return { totalItems, pokemons, totalPages, currentPage };
};
export default getPagingData