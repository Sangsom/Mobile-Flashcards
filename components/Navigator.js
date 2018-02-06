import { StackNavigator } from "react-navigation";
import Tabs from "./TabNav";
import DeckView from "./DeckView";
import AddCard from "./AddCard";
import Quiz from "./Quiz";
import QuizAnswer from "./QuizAnswer";

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
  QuizAnswer: {
    screen: QuizAnswer
  }
});

export default MainNavigator;
