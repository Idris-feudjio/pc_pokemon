import { Strategy as OAuth2Strategy } from "passport-oauth2";
import User from "../app/users/models/user.model";
import passport from "passport";

//Strategy config

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

