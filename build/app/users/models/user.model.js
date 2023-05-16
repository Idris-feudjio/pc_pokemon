"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const pokemon_model_1 = require("../../pokemon/model/pokemon_model");
const trad_model_1 = require("../../trad/trad_model");
let User = class User extends sequelize_typescript_1.Model {
    constructor() {
        super(...arguments);
        this.rightAccess = RightAccess.ADMIN;
    }
};
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: false })
], User.prototype, "firstName", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: false })
], User.prototype, "lastName", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: false })
], User.prototype, "login", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: false })
], User.prototype, "password", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: false })
], User.prototype, "birthDay", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: false })
], User.prototype, "rightAccess", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => pokemon_model_1.Pokemons, {
        onDelete: "CASCADE",
    })
], User.prototype, "pokemons", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => trad_model_1.Trad, {
        onDelete: "CASCADE",
    })
], User.prototype, "trad", void 0);
User = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: "user", timestamps: false })
], User);
exports.default = User;
//# sourceMappingURL=user.model.js.map