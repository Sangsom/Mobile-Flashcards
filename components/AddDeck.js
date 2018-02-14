import React, { Component } from "react";
import { StyleSheet, ScrollView, ToastAndroid } from "react-native";
import {
  Card,
  FormValidationMessage,
  FormLabel,
  FormInput,
  Button
} from "react-native-elements";
import { connect } from "react-redux";
import { addDeck } from "../actions/add_deck";
import { addNewDeck } from "../utils/api";
import { blue } from "../utils/colors";
import PropTypes from "prop-types";

class AddDeck extends Component {
  state = {
    title: "",
    titleError: null
  };

  handleSubmit = () => {
    const { title, titleError } = this.state;
    const { addDeck, decks, navigation } = this.props;
    let valid = true;

    if (title.length < 1) {
      valid = false;
      this.setState({
        titleError: "Title must be longer than 1 character."
      });
    }

    if (decks[title]) {
      valid = false;
      this.setState({
        titleError: "Deck with such title already exists!"
      });
    }

    if (valid) {
      const newDeck = {
        [title]: {
          title,
          questions: []
        }
      };

      addNewDeck(newDeck).then(() => {
        addDeck(newDeck);

        // Show success message
        ToastAndroid.showWithGravity(
          "Deck added",
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM
        );

        navigation.navigate("DeckView", {
          deckTitle: title
        });

        // Clean the form
        this.setState({ title: "", titleError: "" });
      });
    }
  };

  render() {
    const { titleError } = this.state;

    return (
      <ScrollView>
        <Card>
          <FormLabel
            containerStyle={styles.containerStyle}
            labelStyle={styles.labelStyle}
          >
            Deck Title
          </FormLabel>
          <FormInput
            containerStyle={styles.containerStyle}
            inputStyle={styles.inputStyle}
            placeholder="Enter your deck title"
            onChangeText={text => this.setState({ title: text })}
            shake={titleError != null ? true : false}
          />
          {titleError != null && (
            <FormValidationMessage>{titleError}</FormValidationMessage>
          )}
          <Button
            buttonStyle={styles.buttonStyle}
            backgroundColor={blue}
            title="Submit"
            onPress={this.handleSubmit}
          />
        </Card>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    marginBottom: 10
  },
  labelStyle: {
    fontFamily: "Roboto",
    fontSize: 20
  },
  inputStyle: {
    padding: 5
  },
  buttonStyle: {
    marginTop: 10,
    marginBottom: 10
  }
});

const mapStateToProps = ({ decks }) => ({ decks });

AddDeck.propTypes = {
  decks: PropTypes.object.isRequired,
  addDeck: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired
};

export default connect(mapStateToProps, { addDeck })(AddDeck);
