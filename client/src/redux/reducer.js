import { ADD_FAV, REMOVE_FAV, FILTER, ORDER, GET_FAVS, SET_USER_ID } from "./actions";

const initialState = {
  userId: null,
  allCharacters: [],
  myFavorites: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_ID:
      return {...state, userId: action.payload};
    case GET_FAVS:
      return {...state, myFavorites: action.payload};
    case ADD_FAV: 
      return { ...state, myFavorites: [...state.myFavorites, action.payload]};
    case REMOVE_FAV:
      const newFavorites = state.myFavorites.filter(fav => fav.id !== action.payload.id);
      return { ...state, myFavorites: newFavorites};
    case FILTER:
      const copyFavorites = [...state.myFavorites];
      const filtered = state.myFavorites.filter((character) => character.gender === action.payload);
      return { ...state, myFavorites: action.payload === "All" ? copyFavorites : filtered };
    case ORDER:
      return {
        ...state,
        myFavorites:
          action.payload === "Ascendente"
            ? state.myFavorites.sort((a, b) => a.id - b.id)
            : state.myFavorites.sort((a, b) => b.id - a.id), //Descendente
      };
    default:
      return { ...state };
  }
};

export default rootReducer;
