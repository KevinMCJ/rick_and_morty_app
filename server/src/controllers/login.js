const { User } = require("../DB_connection");

const login = async (email, password) => {
  if (!email || !password) {
    throw { status: 400, message: "Faltan datos" };
  }

  const user = await User.findOne({ email: email, password: password });

  if (!user) throw { status: 404, message: "Usuario no encontrado" };

  if (user.email === email && password !== user.password) {
    throw { status: 403, message: "Contraseña incorrecta" };
  }

  return { access: true };
};

module.exports = login;
