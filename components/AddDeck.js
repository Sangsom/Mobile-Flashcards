import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { connect } from "react-redux";
import { addDeck } from "../actions/add_deck";
import { addNewDeck } from "../utils/api";

/**
 * TODO: Notification that deck is added
 * TODO: Validation if there aren't already such a deck
 */

class AddDeck extends Component {
  state = {
    title: ""
  };

  handleSubmit = () => {
    const { title } = this.state;
    const { addDeck } = this.props;
    const newDeck = {
      [title]: {
        title,
        questions: []
      }
    };

    addNewDeck(newDeck).then(() => {
      addDeck(newDeck);
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>What is the title of your new deck?</Text>
        <TextInput
          style={styles.input}
          placeholder="Deck Title"
          onChangeText={text => this.setState({ title: text })}
        />
        <Button title="Submit" onPress={this.handleSubmit} />
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
  input: {
    padding: 10,
    fontSize: 20,
    width: "100%"
  }
});

export default connect(null, { addDeck })(AddDeck);
