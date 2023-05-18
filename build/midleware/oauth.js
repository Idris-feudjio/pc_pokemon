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
const passport_oauth2_1 = require("passport-oauth2");
const user_model_1 = __importDefault(require("../app/users/models/user.model"));
const passport_1 = __importDefault(require("passport"));
//Strategy config
passport_1.default.use(new passport_oauth2_1.Strategy({
    authorizationURL: "http://localhost:3000/oauth2/authorize",
    tokenURL: "http://localhost:3000/oauth2/token",
    clientID: "xyz123",
    clientSecret: "ssh-password",
    callbackURL: "/auth/oauth2/callback",
}, (accessToken, refreshToken, profile, cb) => __awaiter(void 0, void 0, void 0, function* () {
    let user = yield user_model_1.default.findOne({ where: { id: profile.id } });
    if (!user) {
        user = yield user_model_1.default.create({
            id: profile.id,
            login: profile.login,
            password: profile.password,
            rightAccess: profile.rightAccess,
        });
        console.log(user);
    }
    return cb(null, user);
})));
// Used to decode the received cookie and persist session
passport_1.default.deserializeUser((user, cb) => {
    cb(null, user);
});
//# sourceMappingURL=oauth.js.map