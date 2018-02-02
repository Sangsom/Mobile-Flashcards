import { ADD_DECK } from "./actions";

export function addDeck(deck) {
  return {
    type: ADD_DECK,
    deck
  };
}
