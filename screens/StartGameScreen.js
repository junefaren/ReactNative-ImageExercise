import React from "react";
import { View, StyleSheet, Text, TextInput, Button, TouchableWithoutFeedbacks, Keyboard, TouchableWithoutFeedback, Alert } from "react-native";

import Card from "../components/Card";
import Colors from "../constants/colors";
import Input from "../components/Input";

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
    if (chosenNumber === NaN || chosennumber <= 0 || chosenNumber >= 99){
      Alert.alert('Invalid number', 'Number has to be a number between 1 and 99', [{text: 'oke', style: 'destructive', onPress: resetInputHandler}])
        return;
    }
    setConfirmed(true)
    setEnteredValue('')
    setSelectedNumber(chosenNumber)4:52:25 / 5:45:43￼￼￼￼
    React Native Tutorial for Beginners - Crash Course 2020
    545,774 views•Aug 21, 2019
    ￼
    10K
    ￼
    135
    ￼
    SHARE
    ￼
    SAVE
    ￼
    ￼
    Academind
    526K subscribers
    SUBSCRIBE
    Free React Native Introduction for Beginners: Get Started with React Native and learn how to build an iOS and Android app!
    Join the full React Native course: https://acad.link/react-native
    Join our Academind Community on Discord for free: https://discord.gg/gxvEWGU
    
    Exclusive Discount also available for our beststelling React course: https://acad.link/reactjs
    React Native vs Flutter: https://academind.com/learn/flutter/r...
    
    Check out all our other courses: https://academind.com/learn/our-courses
    
    ----------
    
    • Go to https://www.academind.com and subscribe to our newsletter to stay updated and to get exclusive content & discounts
    • Follow @maxedapps and @academind_real on Twitter
    • Follow @academind_real on Instagram: https://www.instagram.com/academind_real
    • Join our Facebook community on https://www.facebook.com/academindcha...
    
    See you in the videos!
    
    ----------
    
    Academind is your source for online education in the areas of web development, frontend web development, backend web development, programming, coding and data science! No matter if you are looking for a tutorial, a course, a crash course, an introduction, an online tutorial or any related video, we try our best to offer you the content you are looking for. Our topics include Angular, React, Vue, Html, CSS, JavaScript, TypeScript, Redux, Nuxt.js, RxJs, Bootstrap, Laravel, Node.js, Progressive Web Apps (PWA), Ionic, React Native, Regular Expressions (RegEx), Stencil, Power BI, Amazon Web Services (AWS), Firebase or other topics, make sure to have a look at this channel or at academind.com to find the learning resource of your choice!
    SHOW MORE
    Up next
    AUTOPLAY
    ￼
    2:06:30
    NOW PLAYING
    React Native Tutorial for Beginners - Build a React Native App [2020]
    Programming with Mosh
    92K views
    3 weeks ago
    ￼
    ￼
    38:18
    NOW PLAYING
    Which one is best for you? Flutter, React Native, Ionic or NativeScript?
    Academind
    84K views
    9 months ago
    ￼
    ￼
    39:37
    NOW PLAYING
    React Native (Expo) Dev Environment Setup + First Project (Windows 10 )
    Daniel Grissom
    116K views
    1 year ago
    ￼
    ￼
    12:37
    NOW PLAYING
    JavaScript Pro Tips - Code This, NOT That
    Fireship
    1.2M views
    1 year ago
    ￼
    ￼
    Mix
    NOW PLAYING
    Mix - Academind
    YouTube
    ￼
    51:28
    NOW PLAYING
    React Native Crash Course 2020
    Traversy Media
    160K views
    
}

let confirmedOutput
if (confirmed) {
confirmedOutput = <Text>chosenNumber:{selectedNumber}</Text>
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
});

export default StartGameScreen;
