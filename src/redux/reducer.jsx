import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from './actions'

const initialState = {
  allCharacters: [],
  myFavorites: []
}

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: [...state.allCharacters, payload],
        allCharacters: [...state.allCharacters, payload]
      }
    case REMOVE_FAV:
      const filtered = state.allCharacters.filter(
        c => c.id !== Number(payload)
      )
      return {
        ...state,
        myFavorites: filtered,
        allCharacters: filtered
      }
    case FILTER:
      if(payload === "All") {
        return {
          ...state,
          myFavorites: state.allCharacters
        }
      }
      return {
        ...state,
        myFavorites: state.allCharacters.filter(
          c => c.gender === payload
        )
      }
    case ORDER:
      return {
        ...state,
        myFavorites: state.myFavorites.sort((a,b) => {
          if (payload === 'A'){
            return a.id - b.id
          } else if (payload === 'D') {
            return b.id - a.id
          }
        })
      }
    default:
      return {...state}
  }
}