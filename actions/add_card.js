import { ADD_CARD } from "./actions";

export function addCard(card) {
  return {
    type: ADD_CARD,
    card
  };
}
