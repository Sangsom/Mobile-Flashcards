import { RECEIVE_DECKS } from "../actions/actions";

const decks = [
  { name: "udacicards", cards: 3 },
  { name: "new deck", cards: 1 },
  { name: "New deck 2", cards: 0 },
  { name: "English", cards: 13 },
  { name: "React Native", cards: 52 }
];

export default function(state = decks, action) {
  switch (action.type) {
    case RECEIVE_DECKS:
      // Need to finish receiving decks.
      // From where they will be received
      // How they will be stored
      // Later should be returned action.decks
      return [...state];
    default:
      return state;
  }
}
