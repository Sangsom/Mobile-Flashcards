import React, { Component } from "react";
import { Text } from "react-native";

const AppText = props => {
  return (
    <Text style={[props.style, { fontFamily: "Roboto" }]}>
      {props.children}
    </Text>
  );
};

export default AppText;
