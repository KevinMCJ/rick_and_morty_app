const express = require("express");
const login = require("../controllers/login");
const postUser = require("../controllers/postUser");
const routerLogin = express.Router();

routerLogin.get("/", async (req, res) => {
  try {
    const { email, password } = req.query;
    res.status(200).json({ access: await login(email, password) });
  } catch (error) {
    error.status
      ? res.status(error.status).json({ error: error.message })
      : res.status(500).json({ error: "Internal Server Error" });
  }
});

routerLogin.post("/", async (req, res) => {
  try {
    const { email, password } = req.body;
    const newUser = await postUser(email, password);
    res.status(200).json(newUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = routerLogin;
