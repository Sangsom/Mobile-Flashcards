import React, { Component } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Button, Text } from "react-native-elements";
import Icon from "react-native-vector-icons/Entypo";
import { green, red } from "../utils/colors";
import PropTypes from "prop-types";

const QuizButtons = props => {
  const { onCorrect, onIncorrect } = props;
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around"
      }}
    >
      <TouchableOpacity
        onPress={() => {
          onCorrect();
          if (props.goBack) {
            props.goBack();
          }
        }}
      >
        <Icon name="thumbs-up" size={60} color={green} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          onIncorrect();
          if (props.goBack) {
            props.goBack();
          }
        }}
      >
        <Icon name="thumbs-down" size={60} color={red} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    marginBottom: 10
  }
});

QuizButtons.propTypes = {
  onCorrect: PropTypes.func.isRequired,
  onIncorrect: PropTypes.func.isRequired,
  goBack: PropTypes.func
};

export default QuizButtons;
