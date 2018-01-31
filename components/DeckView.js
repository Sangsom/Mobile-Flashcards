import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

class DeckView extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Viewing: ${navigation.state.params.deck.title} deck`
  });

  render() {
    const { deck } = this.props.navigation.state.params;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>{deck.title}</Text>
        <Text style={styles.cards}>{deck.questions.length} cards</Text>
        <Button title="Add Card" onPress={() => {}} />
        <Button title="Start Quiz" onPress={() => {}} />
      </View>
    );
  }
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

export default DeckView;
