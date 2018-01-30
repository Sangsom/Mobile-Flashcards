import React, { Component } from "react";
import { Text, View, FlatList, StyleSheet } from "react-native";
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

  seperator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "90%",
          backgroundColor: "#CED0CE",
          alignSelf: "center"
        }}
      />
    );
  };

  render() {
    const { decks } = this.props;
    const decksObj = _.values(decks);

    return (
      <View>
        <FlatList
          data={decksObj}
          ItemSeparatorComponent={this.seperator}
          keyExtractor={item => item.title}
          renderItem={({ item }) => (
            <View style={styles.container}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.cards}>{item.questions.length} cards</Text>
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

export default connect(mapStateToProps, { receiveDecks })(Decks);
