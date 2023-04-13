import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actions";

const initialState = {
  allCharacters: [],
  myFavorites: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV: 
      return { ...state, myFavorites: action.payload, allCharacters: action.payload};
    case REMOVE_FAV:
      return { ...state, myFavorites: action.payload };
    case FILTER:
      const charsFilteredByGender = state.allCharacters.filter((character) => character.gender === action.payload);
      return { ...state, myFavorites: charsFilteredByGender };
    case ORDER:
      return {
        ...state,
        myFavorites:
          action.payload === "Ascendente"
            ? state.allCharacters.sort((a, b) => a.id - b.id)
            : state.allCharacters.sort((a, b) => b.id - a.id), //Descendente
      };
    default:
      return { ...state };
  }
};

export default rootReducer;
