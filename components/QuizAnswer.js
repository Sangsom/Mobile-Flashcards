import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import { styles } from "../utils/styles";
import QuizButtons from "./QuizButtons";

class QuizAnswer extends Component {
  static navigationOptions = {
    title: "Answer"
  };

  render() {
    const { onCorrect, onIncorrect } = this.props.navigation.state.params;
    const { answer } = this.props.navigation.state.params.question;
    const { goBack } = this.props.navigation;

    return (
      <View style={styles.container}>
        <Text>{answer}</Text>
        <QuizButtons
          onCorrect={onCorrect}
          onIncorrect={onIncorrect}
          goBack={goBack}
        />
      </View>
    );
  }
}

export default QuizAnswer;
