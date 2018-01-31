import React, { Component } from "react";
import { View, Text } from "react-native";

class Quiz extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Quiz"
  });

  render() {
    return (
      <View>
        <Text>Quiz has been started</Text>
      </View>
    );
  }
}

export default Quiz;
