import axios from "axios";
export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";
export const FILTER = "FILTER";
export const ORDER = "ORDER";

export const addFav = (character) => {
  const endpoint = "http://localhost:3001/rickandmorty/fav";

  return async (dispatch) => {
    const { data } = await axios.post(endpoint, character);
    return dispatch({
      type: "ADD_FAV",
      payload: data.myFavorites,
    });
  };
};

export const removeFav = (id) => {
  const endpoint = "http://localhost:3001/rickandmorty/fav/" + id;

  return async (dispatch) => {
   const {data} = await axios.delete(endpoint);

   return dispatch({
     type: "REMOVE_FAV",
     payload: data.myFavorites,
   });
  };
};

export const filterCards = (gender) => {
  return {
    type: FILTER,
    payload: gender,
  };
};

//Order recibida => Ascendente - Descendente
export const orderCards = (order) => {
  return {
    type: ORDER,
    payload: order,
  };
};
