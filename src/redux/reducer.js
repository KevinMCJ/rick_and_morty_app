import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actions";

const initialState = {
  allCharacters: [],
  myFavorites: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: [...state.allCharacters, action.payload],
        allCharacters: [...state.allCharacters, action.payload],
      };
    case REMOVE_FAV:
      let filteredList = state.myFavorites.filter((character) => character.id !== action.payload);
      return { ...state, myFavorites: filteredList };
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
