import { useState, useEffect } from "react";
import { View, FlatList, Alert } from "react-native";

import Title from "../../components/title/Title";
import Card from "../../components/card/Card";
import InstructionText from "../../components/instruction-text/InstructionText";
import Button from "../../components/button/Button";
import Guess from "../../components/guess/Guess";
import styles from "./GameScreen.style";

const generateRandomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

let min = 1;
let max = 99;

export default function GameScreen({
  input,
  guesses,
  onGuess,
  onCorrectGuess,
}) {
  const [guess, setGuess] = useState(null);

  const generateRandomNumberHandler = () => {
    const generatedRandomNumber = generateRandomNumber(min, max);
    setGuess(generatedRandomNumber);
    onGuess(generatedRandomNumber);
  };

  const actionHandler = (action) => {
    if (
      (action === "-" && guess < input) ||
      (action === "+" && guess > input)
    ) {
      Alert.alert("Don't lie!", "You know that is wrong.");
      return;
    }

    if (action === "-") {
      max = guess - 1;
    } else if (action === "+") {
      min = guess + 1;
    }

    generateRandomNumberHandler();
  };

  useEffect(() => {
    generateRandomNumberHandler();
  }, []);

  useEffect(() => {
    if (input === guess) onCorrectGuess();
  }, [input, guess]);

  return (
    <View style={styles.container}>
      <Title text="Opponent's Guess" />

      <Title
        text={guess}
        containerStyle={styles.titleContainer}
        textStyle={styles.titleText}
      />

      <Card>
        <View style={styles.cardContent}>
          <InstructionText text="Higher or Lower?" />

          <View style={styles.buttonsContainer}>
            <Button
              text="-"
              containerStyle={styles.button}
              onPress={() => actionHandler("-")}
            />
            <Button
              text="+"
              containerStyle={styles.button}
              onPress={() => actionHandler("+")}
            />
          </View>
        </View>
      </Card>

      <View style={styles.guessesContainer}>
        <FlatList
          data={guesses}
          renderItem={({ item }) => <Guess {...item} />}
        />
      </View>
    </View>
  );
}
