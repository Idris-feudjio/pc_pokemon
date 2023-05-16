"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Trad = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const user_model_1 = __importDefault(require("../users/models/user.model"));
let Trad = class Trad extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.NUMBER, allowNull: false })
], Trad.prototype, "giver_id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.NUMBER, allowNull: true })
], Trad.prototype, "receiver_id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.NUMBER, allowNull: true })
], Trad.prototype, "tradStatus", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => user_model_1.default)
], Trad.prototype, "user", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => user_model_1.default),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.NUMBER, allowNull: false })
], Trad.prototype, "userId", void 0);
Trad = __decorate([
    (0, sequelize_typescript_1.Table)({
        timestamps: false,
        tableName: "trad",
    })
], Trad);
exports.Trad = Trad;
//# sourceMappingURL=trad_model.js.map