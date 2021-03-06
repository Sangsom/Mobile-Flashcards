import { StackNavigator } from "react-navigation";
import Tabs from "./TabNav";
import DeckView from "./DeckView";
import AddCard from "./AddCard";
import Quiz from "./Quiz";
import CardList from "./CardList";

const MainNavigator = StackNavigator({
  Home: {
    screen: Tabs
  },
  DeckView: {
    screen: DeckView
  },
  AddCard: {
    screen: AddCard
  },
  Quiz: {
    screen: Quiz
  },
  CardList: {
    screen: CardList
  }
});

export default MainNavigator;
