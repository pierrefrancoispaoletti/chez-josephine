const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const passportJWT = require("passport-jwt");
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;
const User = require("./database/models/User");
const bcrypt = require("bcrypt");

passport.use(
  "local",
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    async function (email, password, cb) {
      //this one is typically a DB call. Assume that the returned user object is pre-formatted and ready for storing in JWT
      try {
        const user = await User.findOne({ email });
        if (!user) {
          return cb(null, false, { message: "erreur" });
        } else {
          let comparison = await bcrypt.compare(password, user.password);
          if (comparison) {
            return cb(null, user, { message: "Connécté avec succés" });
          }
          return cb(null, false, { message: "OK" });
        }
      } catch (err) {
        return cb(null, false, { message: "erreur" });
      }
    }
  )
);

passport.use(
  "jwt",
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.SECRET_KEY,
    },
    async function (jwtPayload, cb) {
      //find the user in db if needed. This functionality may be omitted if you store everything you'll need in JWT payload.
      try {
        const user = await User.findById(jwtPayload.user._id);
        return cb(null, user);
      } catch (err) {
        return cb(err);
      }
    }
  )
);
