const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

const successHandler = ({id, name, gender, species, origin, image, status}) => {
  const character = {
    id,
    name,
    gender,
    species,
    origin: origin.name,
    image,
    status,
  };

  return character;
};

const getCharById = async (id) => {
  if (isNaN(id) || !id) throw new Error("Invalid id");

  const response = await axios(`${URL}/${Number(id)}`);

  if(!Object.keys(response.data).length){
    throw new Error("Character not found");
  }

  return successHandler(response.data);
};

module.exports = getCharById;
