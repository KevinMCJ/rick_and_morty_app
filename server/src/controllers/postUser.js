const { User } = require("../DB_connection");

const postUser = async (email, password) => {
  if (!email || !password) throw Error("Faltan datos");

  const [newUser, created] = await User.findOrCreate({
    where: { email },
    defaults: { password },
  });

  if (!created) throw Error("Usuario ya existe");

  return newUser;
};

module.exports = postUser;
