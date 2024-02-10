require("dotenv").config();
const passport = require("passport");
var GoogleStrategy = require("passport-google-oauth2").Strategy;

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: `${process.env.BASE_URL}auth/redirect`,
      passReqToCallback: true,
    },
    function (request, accessToken, refreshToken, profile, cb) {
      return cb(null, profile);
    }
  )
);
