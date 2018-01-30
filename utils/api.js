import { AsyncStorage } from "react-native";
import { STORE_KEY, initialDecks } from "../utils/constants";

/**
 * Request storage for decks
 * If there are no decks then initialize with dummy data
 * And return them
 */
export function fetchDecks() {
  return AsyncStorage.getItem(STORE_KEY).then(result => {
    if (result === null) {
      AsyncStorage.setItem(STORE_KEY, JSON.stringify(initialDecks));
      return initialDecks;
    }
    return JSON.parse(result);
  });
}
