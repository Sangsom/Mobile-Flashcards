import { RECEIVE_DECKS, ADD_DECK, ADD_CARD } from "../actions/actions";

export default function(state = {}, action) {
  switch (action.type) {
    case RECEIVE_DECKS:
      return {
        ...state,
        ...action.decks
      };
    case ADD_DECK:
      return {
        ...state,
        ...action.deck
      };
    case ADD_CARD:
      console.log("Reducer", action);
      return {
        ...state
      };
    default:
      return state;
  }
}
