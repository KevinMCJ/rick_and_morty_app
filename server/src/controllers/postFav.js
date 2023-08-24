const { Favorite, User } = require("../DB_connection");

const postFav = async ({
  favoriteId,
  name,
  origin,
  status,
  image,
  species,
  gender,
  userId,
}) => {
  if ((!favoriteId, !name || !origin || !status || !species || !gender || !userId)) {
    throw { status: 401, message: "Faltan datos" };
  }

  const user = await User.findByPk(userId);

  if (!user) throw { status: 404, message: "Usuario no encontrado" };

  const favorite = await Favorite.create({
    favoriteId,
    name,
    origin,
    status,
    species,
    gender,
    image,
  });

  await favorite.setUser(user);

  return favorite;
};

module.exports = postFav;
