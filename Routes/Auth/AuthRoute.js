const express = require("express");
const Router = express.Router();
const ROUTE_PREFIX = '/auth'

const LoginController =  require('../../app/Controllers/Auth/Login')

// CREDENTIALS ROUTE
Router.get(`${ROUTE_PREFIX}/login`, LoginController.login);

// GITHUB SSO ROUTE
module.exports = Router;
