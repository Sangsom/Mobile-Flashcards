import { StackNavigator } from "react-navigation";
import Tabs from "./TabNav";
import DeckView from "./DeckView";

const MainNavigator = StackNavigator({
  Home: {
    screen: Tabs
  },
  DeckView: {
    screen: DeckView
  }
});

export default MainNavigator;
