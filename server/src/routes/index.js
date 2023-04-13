const express = require('express');
const routerCharacter = require("./character");
const routerLogin = require('./login');
const routerFav = require('./fav');
const router = express.Router();

// * RUTAS
router.use("/character", routerCharacter);
router.use("/login", routerLogin);
router.use("/fav", routerFav);

module.exports = router;