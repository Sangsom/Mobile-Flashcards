import React, { Component } from "react";
import { Text, View, FlatList } from "react-native";
import { connect } from "react-redux";
import { receiveDecks } from "../actions/receive_decks";
import { fetchDecks } from "../utils/api";
import _ from "lodash";

class Decks extends Component {
  componentDidMount() {
    fetchDecks().then(decks => {
      this.props.receiveDecks(decks);
    });
  }

  render() {
    const { decks } = this.props;
    const decksObj = _.values(decks);

    return (
      <View>
        <FlatList
          data={decksObj}
          renderItem={({ item }) => <Text>{item.title}</Text>}
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
