import { RECEIVE_DECKS, ADD_DECK, ADD_CARD } from "../actions/actions";

export default function (state = {}, action) {
  switch (action.type) {
    case RECEIVE_DECKS:
      return {
        ...action.decks
      };
    case ADD_DECK:
      return {
        ...state,
        ...action.deck
      };
    case ADD_CARD:
      const { title, questions } = action.card;
      return {
        ...state,
        [title]: { ...state[title], questions }
      };
    default:
      return state;
  }
}
