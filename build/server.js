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
const express_1 = __importDefault(require("express"));
const logging_1 = require("./helpers/logging");
const config_1 = __importDefault(require("./config/config"));
const user_routes_1 = __importDefault(require("./app/users/user_routes"));
const routes_1 = __importDefault(require("./app/pokemon/routes"));
const passport_1 = __importDefault(require("passport"));
const cookie_session_1 = __importDefault(require("cookie-session"));
const user_model_1 = __importDefault(require("./app/users/models/user.model"));
const passport_oauth2_1 = __importDefault(require("passport-oauth2"));
const app = (0, express_1.default)();
config_1.default
    .sync({ force: true })
    .then(() => {
    console.log("Database successfully connected");
    StartServer();
})
    .catch((err) => {
    logging_1.Logging.error(err);
});
const StartServer = () => {
    // cookieSession config
    app.use((0, cookie_session_1.default)({
        maxAge: 24 * 60 * 60 * 1000,
        keys: ["secret-personalize"],
    }));
    passport_1.default.use(new passport_oauth2_1.default({
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
    passport_1.default.serializeUser(function (user, done) {
        done(null, user);
    });
    function isUserAuthenticated(req, res, next) {
        if (req.user) {
            next();
        }
        else {
            console.log("you must login!");
            res.send;
        }
    }
    app.use(passport_1.default.initialize());
    app.use(passport_1.default.session());
    app.use((req, res, next) => {
        logging_1.Logging.info(`Incomming -> Method: [${req.method}] - url: [${req.url}] - IP: [${req.socket.remoteAddress}]`);
        res.on("finish", () => {
            logging_1.Logging.info(`Incomming -> Method: [${req.method}] - url: [${req.url}] - IP: [${req.socket.remoteAddress}] -Status Code : [${res.statusCode}]`);
        });
        next();
    });
    app.use(express_1.default.urlencoded({ extended: true }));
    app.use(express_1.default.json());
    app.use((req, res, next) => {
        res.header("Acces-Control-Allow-Origin", "*");
        res.header("Acces-Control-Allow-Origin", "Oringin, X-Requested-width, content-Type, Accept, Authorization");
        if (req.method == "OPTIONS") {
            res.header("Acces-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET ");
            return res.status(201).json({});
        }
        next();
    });
    /* Routes **/
    app.use(user_routes_1.default);
    app.use(routes_1.default);
    app.get("/ping", (req, res, next) => res.status(201).json({ message: "Hello world" }));
    app.get("/auth/oauth2", passport_1.default.authenticate("oauth2"));
    // secret route
    app.get("/secret", isUserAuthenticated, (req, res) => {
        res.send("You have reached the secret route");
    });
    app.get("/auth/oauth2/callback", passport_1.default.authenticate("oauth2"), (req, res) => {
        res.redirect("/secret");
    });
    /* Error Handling */
    app.use((req, res, next) => {
        const error = new Error("Route Not Found");
        logging_1.Logging.error(error);
        return res.status(404).json({ message: error.message });
    });
    app.listen(process.env.PORT, () => {
        logging_1.Logging.info(`Server is running on Port ${process.env.PORT}.`);
    });
};
//# sourceMappingURL=server.js.map