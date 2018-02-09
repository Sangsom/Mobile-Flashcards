import { ADD_DECK } from "./actions";

export function addDeck(deck) {
  return dispatch => {
    dispatch(addDeckAsync(deck));
  };
}

function addDeckAsync(deck) {
  return {
    type: ADD_DECK,
    deck
  };
}
