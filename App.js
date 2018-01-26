import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TabNavigator } from "react-navigation";
import Home from "./components/Home";
import Notifications from "./components/Notifications";

import { red } from "./utils/colors";

const Tabs = TabNavigator(
  {
    Home: {
      screen: Home
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
    }
  }
);

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Tabs />
      </View>
    );
  }
}
