import React, { Component } from "react";
import { ScrollView, StyleSheet, ToastAndroid } from "react-native";
import {
  Card,
  FormValidationMessage,
  FormLabel,
  FormInput,
  Button
} from "react-native-elements";
import { connect } from "react-redux";
import { addCard } from "../actions/add_card";
import { addNewCard } from "../utils/api";
import { blue } from "../utils/colors";
import PropTypes from "prop-types";

class AddCard extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Add Card"
  });

  state = {
    question: "",
    questionError: null,
    answer: "",
    answerError: null
  };

  handleSubmit = () => {
    const { question, answer, questionError, answerError } = this.state;
    const { title } = this.props.navigation.state.params;
    const { navigation } = this.props;
    let valid = true;

    if (question.length < 1) {
      valid = false;
      this.setState({
        questionError: "Question must be longer than 1 character."
      });
    }

    if (answer.length < 1) {
      valid = false;
      this.setState({
        answerError: "Answer must be longer than 1 character."
      });
    }

    if (valid) {
      const newCard = {
        question,
        answer
      };
      addNewCard(newCard, title).then(result => {
        const cur = JSON.parse(result);
        this.props.addCard(cur[title]);

        // Show success message
        ToastAndroid.showWithGravity(
          "Card added",
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM
        );

        // Go back to deck view
        navigation.goBack();
      });
    }
  };

  render() {
    const { questionError, answerError } = this.state;

    return (
      <ScrollView>
        <Card>
          <FormLabel
            containerStyle={styles.containerStyle}
            labelStyle={styles.labelStyle}
          >
            Question
          </FormLabel>
          <FormInput
            containerStyle={styles.containerStyle}
            inputStyle={styles.inputStyle}
            placeholder="Enter your card question"
            onChangeText={question => this.setState({ question })}
            shake={questionError != null ? true : false}
          />
          {questionError != null && (
            <FormValidationMessage>{questionError}</FormValidationMessage>
          )}

          <FormLabel
            containerStyle={styles.containerStyle}
            labelStyle={styles.labelStyle}
          >
            Answer
          </FormLabel>
          <FormInput
            containerStyle={styles.containerStyle}
            inputStyle={styles.inputStyle}
            placeholder="Enter your card answer"
            onChangeText={text => this.setState({ answer: text })}
            shake={answerError != null ? true : false}
          />
          {answerError != null && (
            <FormValidationMessage>{answerError}</FormValidationMessage>
          )}

          <Button
            buttonStyle={styles.buttonStyle}
            backgroundColor={blue}
            title="Submit"
            onPress={this.handleSubmit}
          />
        </Card>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    marginBottom: 10
  },
  labelStyle: {
    fontFamily: "Roboto",
    fontSize: 20
  },
  inputStyle: {
    padding: 5
  },
  buttonStyle: {
    marginTop: 10,
    marginBottom: 10
  }
});

AddCard.propTypes = {
  addCard: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired
};

export default connect(null, { addCard })(AddCard);
