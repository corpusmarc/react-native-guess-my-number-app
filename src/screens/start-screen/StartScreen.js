import { useState } from "react";
import { View, TextInput, Alert } from "react-native";

import Card from "../../components/card/Card";
import Title from "../../components/title/Title";
import InstructionText from "../../components/instruction-text/InstructionText";
import Button from "../../components/button/Button";
import styles from "./StartScreen.style";

export default function StartScreen({ onInput }) {
  const [input, setInput] = useState("");

  const disabledButton = input.trim().length === 0 || isNaN(input);

  const resetHandler = () => setInput("");

  const confirmHandler = () => {
    const parsedInput = parseInt(input);

    if (parsedInput < 1) {
      Alert.alert(
        "Invalid Input",
        "Number has to be a number between 1 and 99.",
        [{ text: "Okay", onPress: resetHandler }]
      );
      return;
    }

    onInput(parsedInput);
  };

  return (
    <View style={styles.container}>
      <Title text="Guess" textHighlight=" My Number" />

      <Card>
        <View style={styles.cardContent}>
          <InstructionText text="Enter a number" />

          <TextInput
            value={input}
            onChangeText={setInput}
            style={styles.textInput}
            keyboardType="number-pad"
            maxLength={2}
            autoFocus
          />

          <View style={styles.buttonsContainer}>
            <Button
              onPress={resetHandler}
              text="Reset"
              containerStyle={[styles.button, styles.resetButton]}
            />
            <Button
              onPress={confirmHandler}
              text="Confirm"
              disabled={disabledButton}
              containerStyle={styles.button}
            />
          </View>
        </View>
      </Card>
    </View>
  );
}
