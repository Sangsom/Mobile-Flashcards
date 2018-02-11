import { DELETE_DECK } from "./actions";

export function deleteDeck(title) {
  return dispatch => {
    dispatch(deleteDeckAsync(title));
  };
}

function deleteDeckAsync(title) {
  return {
    type: DELETE_DECK,
    title
  };
}
