const { Favorite } = require("../DB_connection");

const deleteFav = async (id) => {
  if (!id) throw Error("Invalid id provided");

  const favToDelete = await Favorite.findByPk(id);

  if (!favToDelete) throw Error("Id not found");

  const aux = { ...favToDelete.dataValues }; //Copia del personaje eliminado para mostrarlo como res.

  await favToDelete.destroy();

  return aux;
};

module.exports = deleteFav;
