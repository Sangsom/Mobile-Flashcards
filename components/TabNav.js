import { TabNavigator } from "react-navigation";
import Decks from "./Decks";
import AddDeck from "./AddDeck";
import { red } from "../utils/colors";

const Tabs = TabNavigator(
  {
    Decks: {
      screen: Decks
    },
    "Add Deck": {
      screen: AddDeck
    }
  },
  {
    tabBarPosition: "top",
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: red
    },
    navigationOptions: {
      header: null
    }
  }
);

export default Tabs;
