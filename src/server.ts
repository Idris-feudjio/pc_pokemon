import express from "express";
import { Logging } from "./helpers/logging";
import connection from "./config/config";

const app = express();

connection
  .sync()
  .then(() => {
    console.log("Database successfully connected");
    StartServer();
  })
  .catch((err) => {
    console.log("Error", err);
  });

const StartServer = () => {
  app.use((req, res, next) => {
    Logging.info(
      `Incomming -> Method: [${req.method}] - url: [${req.url}] - IP: [${req.socket.remoteAddress}]`
    );
    res.on("finish", () => {
      Logging.info(
        `Incomming -> Method: [${req.method}] - url: [${req.url}] - IP: [${req.socket.remoteAddress}] -Status Code : [${res.statusCode}]`
      );
    });
    next();
  });
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  app.use((req, res, next) => {
    res.header("Acces-Control-Allow-Origin", "*");
    res.header(
      "Acces-Control-Allow-Origin",
      "Oringin, X-Requested-width, content-Type, Accept, Authorization"
    );
    if (req.method == "OPTIONS") {
      res.header(
        "Acces-Control-Allow-Methods",
        "PUT, POST, PATCH, DELETE, GET "
      );
      return res.status(201).json({});
    }
    next();
  });
  /* Routes **/
  app.get("/ping", (req, res, next) =>
    res.status(201).json({ message: "Hello world" })
  );

  /* Error Handling */
  app.use((req, res, next) => {
    const error = new Error("Route Not Found");
    Logging.error(error);
    return res.status(404).json({ message: error.message });
  });

  app.listen(process.env.PORT, () => {
    Logging.info(`Server is running on Port ${process.env.PORT}.`);
  });
};
