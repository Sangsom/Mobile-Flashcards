import { DELETE_CARD } from "./actions";

export function deleteCard(title, question) {
  return dispatch => {
    const card = {
      title,
      question
    };

    dispatch(deleteCardAsync(card));
  };
}

function deleteCardAsync(card) {
  return {
    type: DELETE_CARD,
    card
  };
}
