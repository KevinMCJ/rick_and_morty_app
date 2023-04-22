const { Favorite } = require("../DB_connection");

const postFav = async ({ name, origin, status, image, species, gender }) => {
  if (!name || !origin || !status || !species || !gender) {
    throw { status: 401, message: "Faltan datos" };
  }

  const [favorite, created] = await Favorite.findOrCreate({
    where: { name },
    defaults: { origin, status, species, gender, image },
  });

  if (!created) throw Error(`El favorito "${name}" ya ha sido agregado`);

  return favorite;
};

module.exports = postFav;
