import React, { Component } from "react";
import { View } from "react-native";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducers from "./reducers";
import Navigator from "./components/Navigator";

export default class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View style={{ flex: 1 }}>
          <Navigator />
        </View>
      </Provider>
    );
  }
}
