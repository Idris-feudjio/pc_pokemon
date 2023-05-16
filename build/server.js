"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const logging_1 = require("./helpers/logging");
const config_1 = __importDefault(require("./config/config"));
const user_routes_1 = __importDefault(require("./app/users/user_routes"));
const routes_1 = __importDefault(require("./app/pokemon/routes"));
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