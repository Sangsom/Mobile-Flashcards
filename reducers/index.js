import { combineReducers } from "redux";
import ReceiveDecks from "./decks_reducer";

const rootReducer = combineReducers({
  decks: ReceiveDecks
});

export default rootReducer;
