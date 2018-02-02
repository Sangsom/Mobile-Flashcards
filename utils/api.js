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

/**
 *
 * @param {*Deck object} deck
 * Adds new deck object to existing list
 */
export function addNewDeck(deck) {
  return AsyncStorage.mergeItem(STORE_KEY, JSON.stringify(deck), () => {
    AsyncStorage.getItem(STORE_KEY, (err, result) => {
      return JSON.parse(result);
    });
  });
}

export function addNewCard(card, title) {
  return AsyncStorage.getItem(STORE_KEY, (err, result) => {
    let decks = JSON.parse(result);

    // Add new questions to the existing ones
    let questions = JSON.parse(JSON.stringify(decks[title].questions));
    questions.push(card);

    // Create new updated card
    const newCard = JSON.stringify({
      [title]: { title, questions }
    });

    // Merge to storage
    AsyncStorage.mergeItem(STORE_KEY, newCard);
  });
}
