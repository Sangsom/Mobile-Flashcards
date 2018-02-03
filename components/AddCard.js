import React, { Component } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { connect } from 'react-redux';
import { styles } from "../utils/styles";
import { addCard } from '../actions/add_card';
import { addNewCard } from "../utils/api";

class AddCard extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Add Card"
  });

  state = {
    question: "What's your name?",
    answer: "My name is Bekija"
  };

  handleSubmit = () => {
    const { question, answer } = this.state;
    const { title } = this.props.navigation.state.params;
    const newCard = {
      question,
      answer
    };
    addNewCard(newCard, title).then(result => {
      // How to return and pass to action creator a newly created deck???
      const cur = JSON.parse(result);
      this.props.addCard(cur[title]);
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          placeholder="Question"
          onChangeText={question => this.setState({ question })}
          value="What's your name?"
        />
        <TextInput
          style={styles.textInput}
          placeholder="Answer"
          onChangeText={text => this.setState({ answer: text })}
          value="My name is Rinalds"
        />
        <Button title="Submit" onPress={this.handleSubmit} />
      </View>
    );
  }
}
export default connect(null, { addCard })(AddCard);
