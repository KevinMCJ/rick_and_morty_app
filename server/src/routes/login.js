const express = require("express");
const verifyAccess = require("../controllers/login");
const routerLogin = express.Router();

routerLogin.get("/", verifyAccess);

module.exports = routerLogin;