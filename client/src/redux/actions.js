import axios from "axios";
export const SET_USER_ID = "SET_USER_ID";
export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";
export const FILTER = "FILTER";
export const ORDER = "ORDER";
export const GET_FAVS = "GET_FAVS";

export const setUserId = (userId) => {
  return {
    type: SET_USER_ID,
    payload: userId,
  };
};

export const getFavs = (userId) => {
  const endpoint = "http://localhost:3001/rickandmorty/fav/" + userId;

  return async (dispatch) => {
    const { data } = await axios.get(endpoint);
    console.log(data);
    dispatch({
      type: GET_FAVS,
      payload: data,
    });
  };
};

export const addFav = (character) => {
  const endpoint = "http://localhost:3001/rickandmorty/fav";
  return async (dispatch) => {
    const { data } = await axios.post(endpoint, character);
    dispatch({
      type: ADD_FAV,
      payload: data.favorite,
    });
  };
};

export const removeFav = (id) => {
  const endpoint = "http://localhost:3001/rickandmorty/fav/" + id;

  return async (dispatch) => {
    const { data } = await axios.delete(endpoint);

    dispatch({
      type: REMOVE_FAV,
      payload: data.deleted,
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
