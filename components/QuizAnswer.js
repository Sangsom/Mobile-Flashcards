import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import { styles } from "../utils/styles";

class QuizAnswer extends Component {
  static navigationOptions = {
    title: "Answer"
  };

  render() {
    const { answer } = this.props.navigation.state.params.question;
    const { goBack } = this.props.navigation;

    return (
      <View style={styles.container}>
        <Text>{answer}</Text>
        <Button title="Question" onPress={() => goBack()} />
        <Button title="Correct" onPress={() => {}} />
        <Button title="Incorrect" onPress={() => {}} />
      </View>
    );
  }
}

export default QuizAnswer;
