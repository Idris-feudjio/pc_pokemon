"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const dao_1 = __importDefault(require("../../../public/dao"));
const user_model_1 = __importDefault(require("../models/user.model"));
class UserService extends dao_1.default {
    constructor() {
        super(new user_model_1.default());
    }
    sigIn() { }
}
exports.UserService = UserService;
//# sourceMappingURL=user_service.js.map