const express = require("express");
const getCharById = require("../controllers/getCharById");
const routerCharacter = express.Router();

routerCharacter.get("/:id", getCharById);

module.exports = routerCharacter;