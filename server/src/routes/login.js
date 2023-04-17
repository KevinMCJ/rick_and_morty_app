const express = require("express");
const verifyAccess = require("../controllers/login");
const routerLogin = express.Router();

routerLogin.get("/", (req, res) => {
    try {
        const {email, password} = req.query;
        res.status(200).json({access: verifyAccess(email, password)});
    } catch (error) {
        res.status(400).json({access: false, error: error.message});
    }
});

module.exports = routerLogin;