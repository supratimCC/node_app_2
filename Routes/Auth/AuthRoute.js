const express = require("express");
const Router = express.Router();
const ROUTE_PREFIX = "/auth/";
const passport = require("passport");
const GoogleStrategy = require("../../lib/authConfig/googleAuth");
const LoginController = require("../../app/Controllers/Auth/Login");

// CREDENTIALS ROUTE
Router.get(`${ROUTE_PREFIX}login`, LoginController.login);

//GOOGLE SSO ROUTE
Router.get(
  `${ROUTE_PREFIX}google`,
  passport.authenticate("google", { scope: ["email", "profile"] })
);

// GOOGLE SSO REDIRECT URI
Router.get(
  `${ROUTE_PREFIX}redirect`,
  passport.authenticate("google", {
    failureRedirect: "/",
    failureFlash: true,
    session: false,
  }),
  LoginController.login
);

// GITHUB SSO ROUTE
Router.get(`${ROUTE_PREFIX}github`, LoginController.login);

module.exports = Router;
