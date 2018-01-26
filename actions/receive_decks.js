import { RECEIVE_DECKS } from "./actions";

export function receiveDecks(decks) {
  return {
    type: RECEIVE_DECKS,
    decks
  };
}
