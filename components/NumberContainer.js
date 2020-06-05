import React from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import Colors from "..constants/colors";

const NumberContainer = (props) => {
  <View>
    <Text>{props.children}</Text>
  </View>;
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    color: Colors.accent,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default NumberContainer;
