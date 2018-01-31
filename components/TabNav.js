import { TabNavigator } from "react-navigation";
import Decks from "./Decks";
import Notifications from "./Notifications";
import { red } from "../utils/colors";

const Tabs = TabNavigator(
  {
    Decks: {
      screen: Decks
    },
    Notifications: {
      screen: Notifications
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
