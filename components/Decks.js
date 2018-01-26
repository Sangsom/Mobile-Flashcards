import React, { Component } from "react";
import { Text, View, FlatList } from "react-native";

const decks = [
  { name: "udacicards", cards: 3 },
  { name: "new deck", cards: 1 },
  { name: "New deck 2", cards: 0 },
  { name: "English", cards: 13 },
  { name: "React Native", cards: 51 }
];

class Decks extends Component {
  render() {
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

export default Decks;
