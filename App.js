import React, { Component } from "react";
import { View } from "react-native";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import reducers from "./reducers";
import Navigator from "./components/Navigator";

const store = createStore(reducers, applyMiddleware(thunk));

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <Navigator />
        </View>
      </Provider>
    );
  }
}
