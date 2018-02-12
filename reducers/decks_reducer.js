import {
  RECEIVE_DECKS,
  ADD_DECK,
  ADD_CARD,
  DELETE_CARD,
  DELETE_DECK
} from "../actions/actions";
import _ from "lodash";

export default function(state = {}, action) {
  switch (action.type) {
    case RECEIVE_DECKS:
      return {
        ...action.decks
      };
    case ADD_DECK:
      return {
        ...state,
        ...action.deck
      };
    case ADD_CARD:
      const { title, questions } = action.card;
      return {
        ...state,
        [title]: { ...state[title], questions }
      };
    case DELETE_CARD:
      const { card } = action;
      return {
        ...state,
        [card.title]: {
          ...state[card.title],
          questions: state[card.title].questions.filter(question => {
            return question.question !== card.question;
          })
        }
      };
    case DELETE_DECK:
      return { ...action.decks };
    default:
      return state;
  }
}
