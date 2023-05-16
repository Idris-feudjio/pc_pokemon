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
exports.updateUser = exports.getUserById = exports.getAllUser = exports.deleteUser = void 0;
const user_model_1 = __importDefault(require("../models/user.model"));
const user_service_1 = require("../services/user_service");
class UserController extends user_service_1.UserService {
    constructor() {
        super(...arguments);
        this.createUser = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            var user = yield user_model_1.default.create(Object.assign({}, req.body));
            return res
                .status(200)
                .json({ message: "User created successfully", data: user });
        });
    }
}
exports.default = UserController;
const deleteUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const deletedUser = yield user_model_1.default.findByPk(id);
    yield user_model_1.default.destroy({ where: { id } });
    return res
        .status(200)
        .json({ message: "User deleted successfully", data: deletedUser });
});
exports.deleteUser = deleteUser;
const getAllUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const allUser = yield user_model_1.default.findAll();
    return res
        .status(200)
        .json({ message: "User fetched successfully", data: allUser });
});
exports.getAllUser = getAllUser;
const getUserById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const user = yield user_model_1.default.findByPk(id);
    return res
        .status(200)
        .json({ message: "User fetched successfully", data: user });
});
exports.getUserById = getUserById;
const updateUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    yield user_model_1.default.update(Object.assign({}, req.body), { where: { id } });
    const updatedUser = yield user_model_1.default.findByPk(id);
    return res
        .status(200)
        .json({ message: "User updated successfully", data: updatedUser });
});
exports.updateUser = updateUser;
//# sourceMappingURL=user_controller.js.map