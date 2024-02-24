import { View, TextInput } from "react-native";

import Card from "../../components/card/Card";
import Title from "../../components/title/Title";
import InstructionText from "../../components/instruction-text/InstructionText";
import Button from "../../components/button/Button";
import styles from "./StartScreen.style";

export default function StartScreen() {
  return (
    <View style={styles.container}>
      <Title text="Guess" textHighlight=" My Number" />

      <Card>
        <View style={styles.cardContent}>
          <InstructionText text="Enter a number" />

          <TextInput
            style={styles.textInput}
            keyboardType="number-pad"
            maxLength={2}
            autoFocus
          />

          <View style={styles.buttonsContainer}>
            <Button
              text="Reset"
              containerStyle={[styles.button, styles.resetButton]}
            />
            <Button text="Confirm" containerStyle={styles.button} />
          </View>
        </View>
      </Card>
    </View>
  );
}
