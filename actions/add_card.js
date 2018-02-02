import { ADD_CARD } from "./actions";

export function addCard(card) {
  console.log("Action", card);
  return {
    type: ADD_CARD
  };
}
