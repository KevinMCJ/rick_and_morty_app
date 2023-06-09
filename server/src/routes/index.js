const { Router } = require('express');
const routerCharacter = require("./characterRouter");
const routerLogin = require('./login');
const routerFavs = require('./favsRouter');
const router = Router();

// * RUTAS
router.use("/character", routerCharacter);
router.use("/login", routerLogin); // ! era /login , borrando para probar.
router.use("/fav", routerFavs);

module.exports = router;