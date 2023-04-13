const express = require("express");
const handleFavorites = require("../controllers/handleFavorites");
const routerFav = express.Router();

routerFav.post("/", handleFavorites.postFav);

routerFav.delete("/:id", handleFavorites.deleteFav);

module.exports = routerFav;