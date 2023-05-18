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
exports.Schema = exports.ValidateSchema = void 0;
const joi_1 = __importDefault(require("joi"));
const logging_1 = require("../helpers/logging");
const ValidateSchema = (schema) => {
    return (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield schema.validateAsync(req.body);
            next();
        }
        catch (error) {
            logging_1.Logging.error(error);
            return res.status(422).json({ error });
        }
    });
};
exports.ValidateSchema = ValidateSchema;
exports.Schema = {
    user: {
        create: joi_1.default.object({
            firstName: joi_1.default.string().required(),
            lastName: joi_1.default.string(),
            birthDay: joi_1.default.date(),
            login: joi_1.default.string().required(),
            password: joi_1.default.string().required(),
            rightAccess: joi_1.default.string(),
            pokemons: joi_1.default.array(),
            trad: joi_1.default.array(),
        }).options({ stripUnknown: true }),
        update: joi_1.default.object({}).options({
            allowUnknown: true,
            stripUnknown: true,
        }),
    },
    pokemons: {
        create: joi_1.default.object({
            name: joi_1.default.string().required(),
            espece: joi_1.default.string().required(),
            userId: joi_1.default.number().required(),
            chrome: joi_1.default.string(),
            gender: joi_1.default.string(),
            heigth: joi_1.default.number(),
            level: joi_1.default.number(),
        }).options({ stripUnknown: true }),
        update: joi_1.default.object({
            name: joi_1.default.string().required(),
            espece: joi_1.default.string().required(),
            chrome: joi_1.default.string(),
            gender: joi_1.default.string(),
            heigth: joi_1.default.number(),
            level: joi_1.default.number().min(1).max(100),
        }).options({ allowUnknown: true, stripUnknown: true }),
    },
};
//# sourceMappingURL=validations.js.map