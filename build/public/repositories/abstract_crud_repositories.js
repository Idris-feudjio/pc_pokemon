"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractRepository = void 0;
class AbstractRepository {
    constructor(model) {
        this.model = model;
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.model.findAll();
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.model.findByPk(id);
        });
    }
    findOne(field, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.model.findOne({ where: { field }, attributes: options });
        });
    }
    findAllAndPaginate(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.model.findAndCountAll({
                where: Object.assign({}, params.field),
                attributes: params.projections,
                limit: params.limit,
                offset: params.offset,
            });
        });
    }
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.model.create(data);
        });
    }
    // async update(
    //   id: WhereOptions<Attributes<T>>| undefined,
    //   data: object
    // ): Promise<[number, T[]]> {
    //   return this.model.update(data, { where: [id] });
    // }
    func() { }
    delete(where) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.model.destroy({ where: where });
        });
    }
}
exports.AbstractRepository = AbstractRepository;
//# sourceMappingURL=abstract_crud_repositories.js.map