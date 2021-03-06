import React from "react";
import { View, StyleSheet, Text, TextInput, Button, TouchableWithoutFeedbacks, Keyboard, TouchableWithoutFeedback, Alert } from "react-native";

import Card from "../components/Card";
import Colors from "../constants/colors";
import Input from "../components/Input";
import NumberContainer from "../components/NumberContainer"

const StartGameScreen = (props) => {

    const [enteredValue, setEnteredValue] = useState("")
    const [confirmed, setConfirmed] = useState(false)
    const [selectedNumber, setSelectedNumber] = useState()

    const numberInputHandler = inputText => {
    setEnteredValue(inputText.replace(/[^09]/g, ''))
}

const resetInputHandler = () => {
    setEnteredValue('')
    setConfirmed(false)
}

const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue)
    if ( isNaN(chosenNumber) || chosennumber <= 0 || chosenNumber >= 99){
      Alert.alert('Invalid number', 'Number has to be a number between 1 and 99', [{text: 'oke', style: 'destructive', onPress: resetInputHandler}])
        return;
    }
    setConfirmed(true)
    setEnteredValue('')
    setSelectedNumber(chosenNumber)
    Keyboard.dismiss()
}

let confirmedOutput
if (confirmed) {
confirmedOutput = ( <Card style={styles.summaryContainer}>
  <Text>You Selected</Text>
<NumberContainer>{selectedNumber}</NumberContainer>
 <Button title="START GAME" />
  </Card>)
}

<TouchableWithoutFeedback onPress={()=> {
Keyboard.dismiss()
}}/>
  <View style={styles.screen}>
    <Text style={styles.title}>De Botten</Text>
    <Card style={styles.input}>
      <View style={styles.input}>
        <Text>Kies een bot</Text>
        <Input
          style={styles.inputInput}
          blurOnSubmit
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="number-pad"
          maxLength={2}
          onChangeText={numberInputHandler}
          value={enteredValue}
        />
        <View style={styles.buttons}>
          <View style={styles.button}>
            <Button title="Reset" color={Colors.accent} onPress={resetInputHandler} />
          </View>
          <View style={styles.button}>
            <Button title="Confirm" color={Colors.primary} onPress={confirmInputHandler}/>
          </View>
        </View>
      </View>
    </Card>
    {confirmedOutput}
  </View>
}

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
  inputInput: {
    width: 30,
    textAlign: "center",
  },
  button: {
    width: 100,
  },
  summaryContainer: {
    marginTop: 20, 
    alignitems:"center"
  }
});

export default StartGameScreen;
