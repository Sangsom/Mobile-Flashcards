import React, { Component } from "react";
import { View, Text, Button } from "react-native";

const QuizButtons = props => {
  const { onCorrect, onIncorrect } = props;
  return (
    <View>
      <Button
        title="Correct"
        onPress={() => {
          onCorrect();
          if (props.goBack) {
            props.goBack();
          }
        }}
      />
      <Button
        title="Incorrect"
        onPress={() => {
          onIncorrect();
          if (props.goBack) {
            props.goBack();
          }
        }}
      />
    </View>
  );
};

export default QuizButtons;
