import { DELETE_DECK } from "./actions";
import { removeDeck } from "../utils/api";

export function deleteDeck(title, callback) {
  return dispatch => {
    removeDeck(title).then(decks => {
      callback();
      dispatch(deleteDeckAsync(JSON.parse(decks)));
    });
  };
}

function deleteDeckAsync(decks) {
  return {
    type: DELETE_DECK,
    decks
  };
}
