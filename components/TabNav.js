import React, { Component } from "react";
import { Text, View } from "react-native";
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
    }
  }
);

export default Tabs;
