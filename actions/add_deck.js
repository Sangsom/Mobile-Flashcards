import { ADD_DECK } from "./actions";

export function addDeck(deck) {
  console.log("Deck", deck);
  return {
    type: ADD_DECK,
    deck
  };
}
