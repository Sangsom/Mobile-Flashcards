import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Tabs from "./components/TabNav";

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Tabs />
      </View>
    );
  }
}
