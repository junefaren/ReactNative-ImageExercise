import React from "react";
import { View, StyleSheet, Text, TextInput, Button } from "react-native";

const StartGameScreen = (props) => {
  <View style={styles.screen}>
    <Text>De Botten</Text>
    <View style={styles.input}>
      <Text>Kies een bot</Text>
      <TextInput />
      <View styles={styles.buttons}>
        <Button title="Reset" />
        <Button title="Confirm" />
      </View>
    </View>
  </View>;
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  buttons: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  input: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
    shadowColor: "black",
  },
});

export default StartGameScreen;
