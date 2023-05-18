"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const abstract_crud_repositories_1 = require("../../../public/repositories/abstract_crud_repositories");
const trad_model_1 = require("../trad_model");
class ServiceTrade extends abstract_crud_repositories_1.AbstractRepository {
    constructor() {
        super(trad_model_1.Trad);
    }
}
exports.default = ServiceTrade;
//# sourceMappingURL=service_trad.js.map