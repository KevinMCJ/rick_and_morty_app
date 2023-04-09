const axios = require("axios");

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

  res.writeHead(200, { "Content-type": "application/json" });
  res.end(JSON.stringify(characterProps));
};

const errorHandler = (error, res) => {
  res.writeHead(500, { "Contest-type": "text/plain" });
  res.end(error.message);
};

const getCharById = (res, id) => {
  axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then((character) => successHandler(character, res))
    .catch((error) => errorHandler(error, res));
};

module.exports = getCharById;
