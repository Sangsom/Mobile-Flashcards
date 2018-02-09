import React from "react";
import { Text, ScrollView, StyleSheet } from "react-native";
import { Card, Button } from "react-native-elements";
import { getPercent } from "../utils/helpers";
import { blue } from "../utils/colors";
import PropTypes from "prop-types";

const QuizResults = props => {
  const { quizLength, correct, incorrect, navigate } = props;

  return (
    <ScrollView>
      <Card title="Quiz Results" fontFamily="Roboto">
        <Text>
          You have answered {correct} out of {quizLength} questions correctly.
        </Text>
        <Text>Correct: {getPercent(correct, quizLength)}%</Text>
        <Text>Incorrect: {getPercent(incorrect, quizLength)}%</Text>
        <Button
          backgroundColor={blue}
          title="To decks"
          buttonStyle={styles.buttonStyle}
          onPress={() => {
            navigate("Decks");
          }}
        />
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    marginTop: 10,
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
