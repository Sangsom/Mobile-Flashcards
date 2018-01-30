import { AsyncStorage } from "react-native";
import { initialDecks } from "../utils/constants";

export function fetchDecks() {
  return AsyncStorage.getItem("sangsom").then(result => {
    if (result == null) {
      AsyncStorage.setItem("sangsom", JSON.stringify(initialDecks));
    }
    return JSON.parse(result);
  });
}
