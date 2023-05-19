import express, { NextFunction, Request } from "express";
import { Logging } from "./helpers/logging";
import connection from "./config/config";
import userRouter from "./app/users/user_routes";
import pokemonsRouter from "./app/pokemon/routes";
import passport from "passport";
import cookieSession from "cookie-session";
import User from "./app/users/models/user.model";
import OAuth2Strategy from "passport-oauth2";

const app = express();

connection
  .sync({ force: true })
  .then(() => {
    console.log("Database successfully connected");
    StartServer();
    User.findOrCreate({
      where: { id: 1 },
      defaults: {
        firstName: "Pokemaniac",
        lastName: "Leo",
        login: "leopkmn",
        password: "cynthia",
        birthDay: "8 octobre 1999",
        rightAccess: "users:create users:read users:update:all users:delete:all pokemons:create:all pokemons:read pokemons:update:all pokemons:delete:all trade:create:all trade:read trade:update:all logs:read",
      },
    });
  
  })
  .catch((err) => {
    Logging.error(err);
  });

  // s'il n'ya pas d'utilisateur dans la base de données, on en crée un
 
const StartServer = () => {
  // cookieSession config
  app.use(
    cookieSession({
      maxAge: 24 * 60 * 60 * 1000,
      keys: ["secret-personalize"],
    })
  );
  
  passport.use(
    new OAuth2Strategy(
      {
        authorizationURL: "http://localhost:3000/oauth2/authorize",
        tokenURL: "http://localhost:3000/oauth2/token",
        clientID: "xyz123",
        clientSecret: "ssh-password",
        callbackURL: "/auth/oauth2/callback",
      },

      async (
        accessToken: any,
        refreshToken: any,
        profile: User,
        cb: (arg0: null, arg1: User) => any
      ) => {
        let user = await User.findOne({ where: { id: profile.id } });

        if (!user) {
          user = await User.create({
            id: profile.id,
            login: profile.login,
            password: profile.password,
            rightAccess: profile.rightAccess,
          });
          console.log(user);
        }
        return cb(null, user);
      }
    )
  );
  // Used to decode the received cookie and persist session

  passport.deserializeUser((user: User, cb) => {
    cb(null, user);
  });
  passport.serializeUser(function (user, done) {
    done(null, user);
  });



  function isUserAuthenticated(req: Request, res: any, next: NextFunction) {
    if (req.user) {
      next();
    } else {
      console.log("you must login!");
      res.send
    }
  }
 
  app.use(passport.initialize());
  app.use(passport.session());

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
  app.use(userRouter);
  app.use(pokemonsRouter);
  app.get("/ping", (req, res, next) =>
    res.status(201).json({ message: "Hello world" })
  );

  
  app.get("/auth/oauth2", passport.authenticate("oauth2"));
    // secret route

    app.get("/secret", isUserAuthenticated, (req, res) => {
      res.send("You have reached the secret route");
    });
  

  app.get(
    "/auth/oauth2/callback",
    passport.authenticate("oauth2"),
    (req, res) => {
      res.redirect("/secret");
    }
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
