const { User } = require("../DB_connection");

const login = async (email, password) => {
  if (!email || !password) {
    throw { status: 400, message: "Faltan datos" };
  }
  const user = await User.findOne({ where: { email, password } });

  if (!user) throw { status: 404, message: "Usuario no encontrado" };

  if (user.dataValues.email === email && password !== user.dataValues.password) {
    throw { status: 403, message: "Contraseña incorrecta" };
  }

  return user.dataValues.id;
};

module.exports = login;
