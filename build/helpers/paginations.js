"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getPagingData = (data, page, limit) => {
    const { count: totalItems, rows: pokemons } = data;
    const currentPage = page ? +page : 0;
    const totalPages = Math.ceil(totalItems / limit);
    return { totalItems, pokemons, totalPages, currentPage };
};
exports.default = getPagingData;
//# sourceMappingURL=paginations.js.map