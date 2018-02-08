import React, { Component } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { Card, Button } from "react-native-elements";
import QuizButtons from "./QuizButtons";
import { blue } from "../utils/colors";

class QuizAnswer extends Component {
  static navigationOptions = {
    title: "Answer"
  };

  render() {
    const { onCorrect, onIncorrect } = this.props.navigation.state.params;
    const { answer } = this.props.navigation.state.params.question;
    const { goBack } = this.props.navigation;

    return (
      <ScrollView>
        <Card
          title={answer}
          fontFamily="Roboto"
          image={{
            uri: "https://picsum.photos/200/300/?random"
          }}
        >
          <Button
            backgroundColor={blue}
            title="Question"
            buttonStyle={styles.buttonStyle}
            onPress={() => goBack()}
          />
          <QuizButtons
            onCorrect={onCorrect}
            onIncorrect={onIncorrect}
            goBack={goBack}
          />
        </Card>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  buttonStyle: {
    marginBottom: 10
  }
});

export default QuizAnswer;
