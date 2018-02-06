import React, { Component } from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import AppText from "./AppText";
import { styles } from "../utils/styles";

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
        <AppText style={[styles.title]}>{deckTitle}</AppText>
        <Text style={styles.cards}>{deck.questions.length} cards</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigate("AddCard", { title: deckTitle });
          }}
        >
          <AppText>Add Card</AppText>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigate("Quiz", { title: deckTitle });
          }}
        >
          <AppText>Start Quiz</AppText>
        </TouchableOpacity>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    decks: state.decks
  };
}

export default connect(mapStateToProps)(DeckView);
