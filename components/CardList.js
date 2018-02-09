import React, { Component } from "react";
import { ScrollView, ToastAndroid } from "react-native";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { deleteCard } from "../actions/delete_card";
import { List, ListItem } from "react-native-elements";
import { red } from "../utils/colors";
import { removeCard } from "../utils/api";

class CardList extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.title} - Card List`
  });

  removeCard = question => {
    const { deleteCard } = this.props;
    const { title } = this.props.navigation.state.params;

    removeCard(title, question).then(result => {
      deleteCard(title, question);

      // Show success message
      ToastAndroid.showWithGravity(
        "Card deleted",
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM
      );
    });
  };

  render() {
    const { decks, navigation } = this.props;
    const { title } = navigation.state.params;
    const { questions } = decks[title];

    return (
      <ScrollView>
        <List>
          {questions.map((l, i) => (
            <ListItem
              rightIcon={{
                name: "remove-circle",
                color: red
              }}
              onPressRightIcon={() => {
                this.removeCard(l.question);
              }}
              key={i}
              title={l.question}
            />
          ))}
        </List>
      </ScrollView>
    );
  }
}

function mapStateToProps(state) {
  return {
    decks: state.decks
  };
}

CardList.propTypes = {
  decks: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired
};

export default connect(mapStateToProps, { deleteCard })(CardList);
