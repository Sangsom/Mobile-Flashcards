import { RECEIVE_DECKS, ADD_DECK } from "../actions/actions";

export default function(state = {}, action) {
  switch (action.type) {
    case RECEIVE_DECKS:
      return {
        ...state,
        ...action.decks
      };
    case ADD_DECK:
      console.log("REDUCER ADD DECK", action);
      return {
        ...state
      };
    default:
      return state;
  }
}
