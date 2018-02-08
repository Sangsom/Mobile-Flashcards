import React, { Component } from "react";
import { Text, StyleSheet, ScrollView } from "react-native";
import { Card, Button, Divider } from "react-native-elements";
import { connect } from "react-redux";
import QuizButtons from "./QuizButtons";
import QuizResults from "./QuizResults";
import { blue } from "../utils/colors";

class Quiz extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.title} Quiz`
  });

  state = {
    questions: [],
    currentQuestion: 0,
    correct: 0,
    incorrect: 0
  };

  componentDidMount() {
    const { title } = this.props.navigation.state.params;
    const { decks } = this.props;
    this.setState({
      questions: decks[title].questions
    });
  }

  cardCounter = () => {
    const { questions, currentQuestion } = this.state;
    let currentCard =
      currentQuestion + 1 <= questions.length
        ? currentQuestion + 1
        : currentQuestion;
    return `${currentCard} / ${questions.length} cards`;
  };

  correct = () => {
    const { questions, currentQuestion, correct } = this.state;

    if (currentQuestion < questions.length) {
      this.setState({
        currentQuestion: currentQuestion + 1,
        correct: correct + 1
      });
    }
  };

  incorrect = () => {
    const { questions, currentQuestion, incorrect } = this.state;

    if (currentQuestion < questions.length) {
      this.setState({
        currentQuestion: currentQuestion + 1,
        incorrect: incorrect + 1
      });
    }
  };

  showQuestion = () => {
    const { questions, currentQuestion } = this.state;

    // Show questions
    if (questions[currentQuestion] !== undefined) {
      return questions[currentQuestion].question;
    }
  };

  render() {
    const { navigate } = this.props.navigation;
    const { questions, currentQuestion, correct, incorrect } = this.state;
    return (
      <ScrollView>
        {currentQuestion < questions.length ? (
          <Card
            title={this.showQuestion()}
            fontFamily="Roboto"
            image={{
              uri: "https://picsum.photos/200/300/?random"
            }}
          >
            <Text>{this.cardCounter()}</Text>
            <Divider style={styles.dividerStyle} />
            <Button
              backgroundColor={blue}
              title="Answer"
              buttonStyle={styles.buttonStyle}
              onPress={() => {
                navigate("QuizAnswer", {
                  question: questions[currentQuestion],
                  onCorrect: this.correct,
                  onIncorrect: this.incorrect
                });
              }}
            />
            <QuizButtons
              onCorrect={this.correct}
              onIncorrect={this.incorrect}
            />
          </Card>
        ) : (
          <QuizResults
            quizLength={questions.length}
            correct={correct}
            incorrect={incorrect}
            navigate={navigate}
          />
        )}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  buttonStyle: {
    marginBottom: 10
  },
  dividerStyle: {
    marginTop: 10,
    marginBottom: 10
  }
});

function mapStateToProps(state) {
  return {
    decks: state.decks
  };
}

export default connect(mapStateToProps)(Quiz);
