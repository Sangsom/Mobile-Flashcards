import React, { Component } from "react";
import { Text, ScrollView, StyleSheet } from "react-native";
import { Card, Button } from "react-native-elements";
import { getPercent } from "../utils/helpers";
import { blue } from "../utils/colors";
import PropTypes from "prop-types";
import {
  clearLocalNotification,
  setLocalNotification
} from "../utils/notificationAPI";

class QuizResults extends Component {
  componentDidMount() {
    // When the quiz has been taken cancel notifications for today
    // And set new notification for tomorrow
    clearLocalNotification().then(() => {
      setLocalNotification();
    });
  }

  render() {
    const { quizLength, correct, incorrect, navigate, deckTitle } = this.props;
    return (
      <ScrollView>
        <Card title="Quiz Results" fontFamily="Roboto">
          <Text>
            You have answered {correct} out of {quizLength} questions correctly.
          </Text>
          <Text>Correct: {getPercent(correct, quizLength)}%</Text>
          <Text style={{ marginBottom: 10 }}>
            Incorrect: {getPercent(incorrect, quizLength)}%
          </Text>
          <Button
            backgroundColor={blue}
            title="Restart Quiz"
            buttonStyle={styles.buttonStyle}
            onPress={() => {
              navigate("Quiz", { title: deckTitle });
            }}
          />
          <Button
            backgroundColor={blue}
            title="Back to Deck"
            buttonStyle={styles.buttonStyle}
            onPress={() => {
              navigate("DeckView", {
                deckTitle
              });
            }}
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

QuizResults.propTypes = {
  quizLength: PropTypes.number.isRequired,
  correct: PropTypes.number.isRequired,
  incorrect: PropTypes.number.isRequired,
  navigate: PropTypes.func.isRequired
};

export default QuizResults;
