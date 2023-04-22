const { Router } = require("express");
const postFav = require("../controllers/postFav");
const deleteFav = require("../controllers/deleteFav");
const favsRouter = Router();

favsRouter.post("/", async (req, res) => {
  try {
    const favorite = await postFav(req.body);
    res.status(200).json({
      message: "Character added to favorites",
      favorite,
    });
  } catch (error) {
    error.status
      ? res.status(error.status).json({ error: error.message })
      : res.status(500).json({ error: error.message });
  }
});

favsRouter.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await deleteFav(Number(id));
    res.status(200).json({
      message: "Character removed from favorites",
      deleted,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = favsRouter;
