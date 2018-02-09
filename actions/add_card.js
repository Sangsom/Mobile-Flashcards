import { ADD_CARD } from "./actions";

export function addCard(card) {
  return dispatch => {
    dispatch(addCardAsync(card));
  };
}

function addCardAsync(card) {
  return {
    type: ADD_CARD,
    card
  };
}
