const users = require("../utils/users");

const verifyAccess = (req, res) => {
    const { email, password } = req.query;
    const user = users.find((user) => user.email === email && user.password === password);

    if(!user) {
       return res.status(500).json({access: false});
    }

    res.status(200).json({access: true});
};

module.exports = verifyAccess;