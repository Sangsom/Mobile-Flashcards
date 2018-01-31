import React, { Component } from "react";
import { View, Text } from "react-native";

class AddCard extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Add Card"
  });

  render() {
    return (
      <View>
        <Text>Add new card</Text>
      </View>
    );
  }
}

export default AddCard;
