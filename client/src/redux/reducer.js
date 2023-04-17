import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actions";

const initialState = {
  allCharacters: [],
  myFavorites: [],
};

let count = 0;

const rootReducer = (state = initialState, action) => {
  count++
  console.log(`${count}- Allcharacter son `, state.allCharacters);
  console.log(`${count}- Myfavorites son `, state.myFavorites);

  switch (action.type) {
    case ADD_FAV: 
      return { ...state, myFavorites: action.payload, allCharacters: action.payload};
    case REMOVE_FAV:
      return { ...state, myFavorites: action.payload, allCharacters: action.payload}; 
    case FILTER:
      const copyCharacters= state.allCharacters;
      const filtered = copyCharacters.filter((character) => character.gender === action.payload);
      return { ...state, myFavorites: action.payload === "All" ? copyCharacters : filtered };
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
