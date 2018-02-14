import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Card, Button, Divider } from "react-native-elements";
import { connect } from "react-redux";
import QuizButtons from "./QuizButtons";
import QuizResults from "./QuizResults";
import { blue, grey, green } from "../utils/colors";
import PropTypes from "prop-types";
import FlipCard from "react-native-flip-card";
import { image } from "../utils/constants";

class Quiz extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.title} Quiz`
  });

  state = {
    questions: [],
    currentQuestion: 0,
    correct: 0,
    incorrect: 0,
    flip: false
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
      this.setState(prevState => {
        return {
          currentQuestion: prevState.currentQuestion + 1,
          correct: prevState.correct + 1
        };
      });
    }
  };

  incorrect = () => {
    const { questions, currentQuestion, incorrect } = this.state;

    if (currentQuestion < questions.length) {
      this.setState(prevState => {
        return {
          currentQuestion: prevState.currentQuestion + 1,
          incorrect: prevState.incorrect + 1
        };
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

  toggleAnswer = () => {
    const { flip } = this.state;
    this.setState({ flip: !flip });
  };

  render() {
    const { navigate } = this.props.navigation;
    const { questions, currentQuestion, correct, incorrect, flip } = this.state;
    const { title } = this.props.navigation.state.params;
    return (
      <ScrollView>
        {currentQuestion < questions.length ? (
          <Card
            title={this.showQuestion()}
            titleStyle={styles.titleStyle}
            fontFamily="Roboto"
            image={image}
          >
            <FlipCard
              friction={12}
              perspective={2000}
              flipHorizontal={false}
              flipVertical={true}
              flip={flip}
              clickable={true}
              alignHeight={false}
              style={{
                borderRadius: 4,
                borderWidth: 0.5,
                borderColor: grey,
                alignItems: "center",
                marginBottom: 10
              }}
              onPress={() => {
                console.log("Clicked");
              }}
            >
              <View>
                <Text style={styles.flipCardStyle}>{this.showQuestion()}</Text>
              </View>
              <View>
                <Text style={styles.flipCardStyle}>
                  {questions[currentQuestion].answer}
                </Text>
              </View>
            </FlipCard>
            <Text>{this.cardCounter()}</Text>
            <Divider style={styles.dividerStyle} />
            <Button
              backgroundColor={blue}
              title="Show Answer"
              buttonStyle={styles.buttonStyle}
              onPress={this.toggleAnswer}
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
            deckTitle={title}
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
  titleStyle: {
    fontSize: 20
  },
  dividerStyle: {
    marginTop: 10,
    marginBottom: 10
  },
  flipCardStyle: {
    fontSize: 20,
    padding: 10,
    fontFamily: "Roboto"
  }
});

const mapStateToProps = ({ decks }) => ({ decks });

Quiz.propTypes = {
  decks: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(Quiz);
