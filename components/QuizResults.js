import React from "react";
import { View, Text, Button } from "react-native";
import { getPercent } from "../utils/helpers";

const QuizResults = props => {
  const { quizLength, correct, incorrect, navigate } = props;

  return (
    <View>
      <Text>Quiz Results:</Text>
      <Text>
        You have answered {correct} out of {quizLength} questions correctly.
      </Text>
      <Text>Correct: {getPercent(correct, quizLength)}%</Text>
      <Text>Incorrect: {getPercent(incorrect, quizLength)}%</Text>
      <Button
        title="To decks"
        onPress={() => {
          navigate("Decks");
        }}
      />
    </View>
  );
};

export default QuizResults;
