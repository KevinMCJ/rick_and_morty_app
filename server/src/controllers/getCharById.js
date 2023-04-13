const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

const successHandler = (character, res) => {
  const characterProps = {
    id: character.data.id,
    name: character.data.name,
    gender: character.data.gender,
    species: character.data.species,
    origin: character.data.origin.name,
    image: character.data.image,
    status: character.data.status,
  };

  res.status(200).json(characterProps);
};

const getCharById = (req, res) => {
  const { id } = req.params;

  axios(`${URL}/${id}`)
    .then((character) => {
      character
        ? successHandler(character, res)
        : res.status(404).json({ message: "character not found" });
    })
    .catch((error) => res.status(500).json({ error: error.message }));
};

module.exports = getCharById;
