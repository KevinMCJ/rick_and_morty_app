const { Router } = require("express");
const { postFav, deleteFav } = require("../controllers/handleFavorites");
const favsRouter = Router();

favsRouter.post("/", (req, res) => {
  try {
    res.status(200).json({
      message: "Character added to favorites",
      myFavorites: postFav(req.body),
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

favsRouter.delete("/:id", (req, res) => {
  try {
    const { id } = req.params;
    res.status(200).json({
      message: "Character removed from favorites",
      myFavorites: deleteFav(Number(id)),
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = favsRouter;
