import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { connect } from "react-redux";

class DeckView extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Viewing: ${navigation.state.params.deckTitle} deck`
  });

  render() {
    const { deckTitle } = this.props.navigation.state.params;
    const deck = this.props.decks[deckTitle];
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>{deckTitle}</Text>
        <Text style={styles.cards}>{deck.questions.length} cards</Text>
        <Button
          title="Add Card"
          onPress={() => {
            navigate("AddCard", { title: deckTitle });
          }}
        />
        <Button
          title="Start Quiz"
          onPress={() => {
            navigate("Quiz", { title: deckTitle });
          }}
        />
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    decks: state.decks
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 50
  },
  title: {
    fontSize: 30
  },
  cards: {
    fontSize: 20
  }
});

export default connect(mapStateToProps)(DeckView);
