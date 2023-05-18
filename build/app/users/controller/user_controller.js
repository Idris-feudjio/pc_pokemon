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
const user_model_1 = __importDefault(require("../models/user.model"));
const user_service_1 = require("../services/user_service");
class UserController extends user_service_1.UserService {
    constructor() {
        super(...arguments);
        this.userService = new user_service_1.UserService();
        this.createUser = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            var user = yield this.userService.create(req.body);
            return res
                .status(200)
                .json({ message: "User created successfully", data: user });
        });
        this.updateUser = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield user_model_1.default.update(Object.assign({}, req.body), { where: { id } });
            const updatedUser = yield user_model_1.default.findOne({
                where: { id },
                attributes: ["id", "firstName", "lastName", "birthDay", "rightAccess"],
            });
            return res
                .status(200)
                .json({ message: "User updated successfully", data: updatedUser });
        });
        this.deleteUser = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const user = yield user_model_1.default.findByPk(id);
            if (user) {
                yield user_model_1.default.destroy({ where: { id } });
                return res.status(200).json({ message: "User deleted successfully" });
            }
            else {
                res.status(504).json({ message: "User Not Found" });
            }
        });
        this.getAllUser = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const allUser = yield user_model_1.default.findAll({
                attributes: ["id", "firstName", "lastName", "birthDay", "rightAccess"],
            });
            return res
                .status(200)
                .json({ message: "User fetched successfully", data: allUser });
        });
        this.getUserById = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const user = yield user_model_1.default.findByPk(id);
            return res
                .status(200)
                .json({ message: "User fetched successfully", data: user });
        });
    }
}
exports.default = UserController;
//# sourceMappingURL=user_controller.js.map