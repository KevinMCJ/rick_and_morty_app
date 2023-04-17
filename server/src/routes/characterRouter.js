const { Router } = require("express");
const getCharById = require("../controllers/getCharById");
const characterRouter = Router();

characterRouter.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const character = await getCharById(id);
        res.status(200).json(character);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

module.exports = characterRouter;