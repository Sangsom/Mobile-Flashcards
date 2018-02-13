import React, { Component } from "react";
import { Text, ScrollView, StyleSheet, Alert } from "react-native";
import { connect } from "react-redux";
import { Card, Button } from "react-native-elements";
import { blue, red } from "../utils/colors";
import PropTypes from "prop-types";
import { removeDeck } from "../utils/api";
import { deleteDeck } from "../actions/delete_deck";

class DeckView extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Viewing: ${navigation.state.params.deckTitle} deck`
  });

  alert = deckTitle => {
    Alert.alert(
      "Delete deck",
      `Are you sure you want to delete ${deckTitle} deck?`,
      [
        { text: "Cancel", onPress: () => console.log("Cancelled") },
        { text: "Delete", onPress: () => this.delete(deckTitle) }
      ]
    );
  };

  delete = deckTitle => {
    const { deleteDeck, navigation } = this.props;

    deleteDeck(deckTitle, () => {
      navigation.navigate("Decks");
    });
  };

  render() {
    const { deckTitle } = this.props.navigation.state.params;
    const deck = this.props.decks[deckTitle];
    const { navigate } = this.props.navigation;

    let disabled = true;
    if (deck) {
      disabled = deck.questions.length === 0 ? true : false;
    }

    return (
      <ScrollView>
        {deck ? (
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
              title="Show Cards"
              buttonStyle={styles.buttonStyle}
              onPress={() => {
                navigate("CardList", { title: deckTitle });
              }}
            />
            <Button
              backgroundColor={blue}
              title="Start Quiz"
              buttonStyle={styles.buttonStyle}
              onPress={() => {
                navigate("Quiz", { title: deckTitle });
              }}
            />
            <Button
              backgroundColor={red}
              title="Delete Deck"
              buttonStyle={styles.buttonStyle}
              onPress={() => this.alert(deckTitle)}
            />
          </Card>
        ) : (
          <Text>There is no deck to show!!!</Text>
        )}
      </ScrollView>
    );
  }
}

const mapStateToProps = ({ decks }) => ({ decks });

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
  navigation: PropTypes.object.isRequired,
  deleteDeck: PropTypes.func.isRequired
};

export default connect(mapStateToProps, { deleteDeck })(DeckView);
