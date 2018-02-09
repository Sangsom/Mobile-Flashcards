import React, { Component } from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import { receiveDecks } from "../actions/receive_decks";
import { fetchDecks } from "../utils/api";
import _ from "lodash";
import { List, ListItem } from "react-native-elements";
import PropTypes from "prop-types";

class Decks extends Component {
  componentDidMount() {
    fetchDecks().then(decks => {
      this.props.receiveDecks(decks);
    });
  }

  render() {
    const { decks, navigation } = this.props;
    const decksObj = _.values(decks);

    return (
      <View>
        <List containerStyle={{ marginBottom: 30 }}>
          {decksObj.map(deck => (
            <ListItem
              roundAvatar
              leftIcon={{ name: "folder" }}
              key={deck.title}
              title={deck.title}
              badge={{
                value: deck.questions.length,
                textStyle: { color: "orange" }
              }}
              fontFamily="Roboto"
              onPress={() => {
                navigation.navigate("DeckView", {
                  deckTitle: deck.title
                });
              }}
            />
          ))}
        </List>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    decks: state.decks
  };
}

Decks.propTypes = {
  decks: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
  receiveDecks: PropTypes.func.isRequired
};

export default connect(mapStateToProps, { receiveDecks })(Decks);
