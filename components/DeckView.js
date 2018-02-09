import React, { Component } from "react";
import { Text, ScrollView, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { Card, Button } from "react-native-elements";
import { blue } from "../utils/colors";
import PropTypes from "prop-types";

class DeckView extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Viewing: ${navigation.state.params.deckTitle} deck`
  });

  render() {
    const { deckTitle } = this.props.navigation.state.params;
    const deck = this.props.decks[deckTitle];
    const { navigate } = this.props.navigation;
    let disabled = deck.questions.length === 0 ? true : false;

    return (
      <ScrollView>
        <Card
          title={deckTitle}
          titleStyle={styles.titleStyle}
          fontFamily="Roboto"
          image={{
            uri: "https://picsum.photos/200/300/?random"
          }}
          containerStyle={styles.containerStyle}
        >
          <Text style={styles.textStyle}>
            {deck.questions.length} card(-s) are hidden in this deck.
          </Text>
          <Button
            backgroundColor={blue}
            title="Add Card"
            buttonStyle={styles.buttonStyle}
            onPress={() => {
              navigate("AddCard", { title: deckTitle });
            }}
          />
          <Button
            backgroundColor={blue}
            title="Start Quiz"
            buttonStyle={styles.buttonStyle}
            onPress={() => {
              navigate("Quiz", { title: deckTitle });
            }}
            disabled={disabled}
          />
        </Card>
      </ScrollView>
    );
  }
}

function mapStateToProps(state) {
  return {
    decks: state.decks
  };
}

const styles = StyleSheet.create({
  containerStyle: {
    padding: 10
  },
  buttonStyle: {
    marginBottom: 10
  },
  textStyle: {
    marginBottom: 10
  },
  titleStyle: {
    fontSize: 30
  }
});

DeckView.propTypes = {
  decks: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(DeckView);
