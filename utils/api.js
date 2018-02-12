import { AsyncStorage } from "react-native";
import { STORE_KEY, initialDecks } from "../utils/constants";
import _ from "lodash";

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
  return AsyncStorage.getItem(STORE_KEY)
    .then(result => {
      let decks = JSON.parse(result);

      // Add new questions to the existing ones
      let questions = JSON.parse(JSON.stringify(decks[title].questions));
      questions.push(card);

      // Create new updated card
      const newCard = JSON.stringify({
        [title]: { title, questions }
      });

      return newCard;
    })
    .then(updatedDeck => {
      return AsyncStorage.mergeItem(STORE_KEY, updatedDeck).then(result => {
        return AsyncStorage.getItem(STORE_KEY);
      });
    });
}

export function removeCard(title, question) {
  // Need to update deck with removed card
  return AsyncStorage.getItem(STORE_KEY)
    .then(result => {
      let decks = JSON.parse(result);

      // Remove question
      let questions = JSON.parse(JSON.stringify(decks[title].questions));
      questions = questions.filter(q => q.question !== question);

      // Create new updated card
      const newCard = JSON.stringify({
        [title]: { title, questions }
      });

      return newCard;
    })
    .then(updatedDeck => {
      return AsyncStorage.mergeItem(STORE_KEY, updatedDeck).then(result => {
        return AsyncStorage.getItem(STORE_KEY);
      });
    });
}

export function removeDeck(title) {
  return AsyncStorage.getItem(STORE_KEY)
    .then(result => {
      let decks = JSON.parse(result);
      let newDecks = _.omit(decks, title);

      return newDecks;
    })
    .then(updatedDeck => {
      AsyncStorage.setItem(STORE_KEY, JSON.stringify(updatedDeck));

      return JSON.stringify(updatedDeck);
    });
}
