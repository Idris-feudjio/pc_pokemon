"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logging = void 0;
const chalk_1 = __importDefault(require("chalk"));
class Logging {
}
_a = Logging;
Logging.log = (arg) => _a.info(arg);
Logging.info = (arg) => console.log(chalk_1.default.blue(`[${new Date().toLocaleString()}] [INFO]`, typeof arg === "string" ? chalk_1.default.blackBright(arg) : arg));
Logging.warn = (arg) => console.log(chalk_1.default.yellow(`[${new Date().toLocaleString()}] [Warning]`, typeof arg === "string" ? chalk_1.default.yellow(arg) : arg));
Logging.error = (arg) => console.log(chalk_1.default.red(`[${new Date().toLocaleString()}] [Critic]`, typeof arg === "string" ? chalk_1.default.red(arg) : arg));
exports.Logging = Logging;
//# sourceMappingURL=logging.js.map