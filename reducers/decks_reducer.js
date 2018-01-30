import { RECEIVE_DECKS } from "../actions/actions";

export default function(state = {}, action) {
  switch (action.type) {
    case RECEIVE_DECKS:
      return action.decks;
    default:
      return state;
  }
}
