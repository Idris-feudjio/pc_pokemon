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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const user_model_1 = __importDefault(require("../models/user.model"));
const abstract_crud_repositories_1 = require("../../../public/repositories/abstract_crud_repositories");
class UserService extends abstract_crud_repositories_1.AbstractRepository {
    constructor() {
        super(user_model_1.default);
    }
    userLogin(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.body;
        });
    }
    logOut(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            req.logout((err) => {
                console.log(err);
            });
        });
    }
}
exports.UserService = UserService;
//# sourceMappingURL=user_service.js.map