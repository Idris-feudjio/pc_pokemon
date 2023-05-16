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
exports.AbstractCrudRepository = void 0;
class AbstractCrudRepository {
    create(body) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield body.save().then(model => {
                return model;
            }).catch(err => { return err; });
        });
    }
    delete(id) {
        return this.model.destroy();
    }
    findById(id) {
        throw new Error("Method not implemented.");
    }
    listAll() {
        throw new Error("Method not implemented.");
    }
    searchAll(parameterName, parameterValue, sortBy, order, pageSize, pageNumber) {
        throw new Error("Method not implemented.");
    }
}
exports.AbstractCrudRepository = AbstractCrudRepository;
//# sourceMappingURL=abstract_crud_repositories.js.map