let myFavorites = require("../utils/myFavorites");

const postFav = (character) => {
  const { id, name, image } = character;

  if (!id || !name || !image) {
    throw new Error("Required information missing");
  }

  myFavorites.push(character);

  return myFavorites;
};

const deleteFav = (id) => {
  if (!id) {
    throw new Error("id not found");
  }

  myFavorites = myFavorites.filter((fav) => fav.id !== id);

  return myFavorites;
};

module.exports = {
  postFav,
  deleteFav,
};
