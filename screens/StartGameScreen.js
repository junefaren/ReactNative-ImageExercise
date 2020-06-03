import React from "react";
import { View, StyleSheet, Text, TextInput, Button } from "react-native";

import Card from "../components/Card";
import Colors from "../constants/colors";
import Input from "../components/Input";

const StartGameScreen = (props) => {
  <View style={styles.screen}>
    <Text style={styles.title}>De Botten</Text>
    <Card style={styles.input}>
      <View style={styles.input}>
        <Text>Kies een bot</Text>
        <TextInput />
        <View style={styles.buttons}>
          <View style={styles.button}>
            <Button title="Reset" color={Colors.accent} />
          </View>
          <View style={styles.button}>
            <Button title="Confirm" color={Colors.primary} />
          </View>
        </View>
      </View>
    </Card>
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
  },
  button: {
    width: 100,
  },
});

export default StartGameScreen;
