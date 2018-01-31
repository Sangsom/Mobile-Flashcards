import { RECEIVE_DECKS } from "../actions/actions";

export default function(state = {}, action) {
  switch (action.type) {
    case RECEIVE_DECKS:
      return {
        ...state,
        ...action.decks
      };

    default:
      return state;
  }
}
