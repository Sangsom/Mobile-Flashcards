import React, { Component } from "react";
import { Text, View, FlatList } from "react-native";
import { connect } from "react-redux";
import { receiveDecks } from "../actions/receive_decks";

class Decks extends Component {
  componentDidMount() {
    this.props.receiveDecks();
  }

  render() {
    const { decks } = this.props;
    return (
      <View>
        <FlatList
          data={decks}
          renderItem={({ item }) => (
            <View key={item.name}>
              <Text>{item.name}</Text>
              <Text>{item.cards}</Text>
            </View>
          )}
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

export default connect(mapStateToProps, { receiveDecks })(Decks);
