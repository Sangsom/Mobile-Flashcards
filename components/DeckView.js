import React, { Component } from "react";
import { Text, ScrollView } from "react-native";
import { connect } from "react-redux";
import { Card, Button } from "react-native-elements";

class DeckView extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Viewing: ${navigation.state.params.deckTitle} deck`
  });

  render() {
    const { deckTitle } = this.props.navigation.state.params;
    const deck = this.props.decks[deckTitle];
    const { navigate } = this.props.navigation;

    return (
      <ScrollView>
        <Card
          title={deckTitle}
          titleStyle={{ fontSize: 30 }}
          fontFamily="Roboto"
          image={{
            uri: "https://picsum.photos/200/300/?random"
          }}
          containerStyle={{ padding: 10 }}
        >
          <Text style={{ marginBottom: 10 }}>
            {deck.questions.length} card(-s) are hidden in this deck.
          </Text>
          <Button
            icon={{ name: "add" }}
            backgroundColor="#03A9F4"
            title="Add Card"
            buttonStyle={{ marginBottom: 10 }}
            onPress={() => {
              navigate("AddCard", { title: deckTitle });
            }}
          />
          <Button
            icon={{ name: "add" }}
            backgroundColor="#03A9F4"
            title="Start Quiz"
            onPress={() => {
              navigate("Quiz", { title: deckTitle });
            }}
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

export default connect(mapStateToProps)(DeckView);
