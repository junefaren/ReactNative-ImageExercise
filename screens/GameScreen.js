import React from "react";
import { View, Text, StyleSheet } from "react-native";

const generateRandomBetween = (min, max, exclude) => {};

const GameScreen = (props) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNr = Math.floor(Math.random() * (max - min)) + min;
  if (rndNr === exclude) {
    return generateRandomBetween;
  } else {
    return rndNr;
  }
};

const styles = StyleScreen.create({});

export default GameScreen;
