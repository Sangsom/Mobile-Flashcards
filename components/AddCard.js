import React, { Component } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { connect } from "react-redux";
import { styles } from "../utils/styles";
import { addCard } from "../actions/add_card";
import { addNewCard } from "../utils/api";

class AddCard extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Add Card"
  });

  state = {
    question: "",
    answer: ""
  };

  handleSubmit = () => {
    const { question, answer } = this.state;
    const { title } = this.props.navigation.state.params;
    const newCard = {
      question,
      answer
    };
    addNewCard(newCard, title).then(result => {
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
        />
        <TextInput
          style={styles.textInput}
          placeholder="Answer"
          onChangeText={text => this.setState({ answer: text })}
        />
        <Button title="Submit" onPress={this.handleSubmit} />
      </View>
    );
  }
}
export default connect(null, { addCard })(AddCard);
