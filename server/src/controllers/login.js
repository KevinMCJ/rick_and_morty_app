const users = require("../utils/users");

const verifyAccess = (email, password) => {
    const user = users.some((user) => user.email === email && user.password === password);

    if(!user) {
       throw new Error("Usuario no registrado");
    }

    return true;
};

module.exports = verifyAccess;