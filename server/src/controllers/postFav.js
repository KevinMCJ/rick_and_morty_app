const { Favorite, User } = require("../DB_connection");

const postFav = async ({
  id,
  name,
  origin,
  status,
  image,
  species,
  gender,
  userId,
}) => {
  if (
    (!id || !name || !origin || !status || !species || !gender || !userId)
  ) {
    throw { status: 401, message: "Faltan datos" };
  }

  const user = await User.findByPk(userId);

  if (!user) throw { status: 404, message: "Usuario no encontrado" };

  const thereIsFavorite = await Favorite.findOne({
    where: { id },
  });

  if (thereIsFavorite)
    throw { status: 400, message: "Ya existe el favorito en la lista" };

  const favorite = await Favorite.create({
    id,
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
