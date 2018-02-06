import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import { connect } from "react-redux";
import { styles } from "../utils/styles";
import QuizButtons from "./QuizButtons";
import QuizResults from "./QuizResults";

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
      <View style={styles.container}>
        <Text>{this.cardCounter()}</Text>
        <Text>{this.showQuestion()}</Text>

        {currentQuestion < questions.length ? (
          <View>
            <Button
              title="Answer"
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
          </View>
        ) : (
          <QuizResults
            quizLength={questions.length}
            correct={correct}
            incorrect={incorrect}
            navigate={navigate}
          />
        )}
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    decks: state.decks
  };
}

export default connect(mapStateToProps)(Quiz);
