import { View, Text, TextInput } from "react-native";

import Card from "../../components/card/Card";
import Title from "../../components/title/Title";
import Button from "../../components/button/Button";
import styles from "./StartScreen.style";

export default function StartScreen() {
  return (
    <View style={styles.container}>
      <Title text="Guess My" textHighlight="Number" />

      <Card>
        <View style={styles.cardContent}>
          <Text style={styles.label}>Enter a number</Text>

          <TextInput
            style={styles.textInput}
            keyboardType="number-pad"
            maxLength={2}
            autoFocus
          />

          <View style={styles.buttonsContainer}>
            <Button text="Reset" containerStyle={{ width: "40%" }} />
            <Button text="Confirm" containerStyle={{ width: "40%" }} />
          </View>
        </View>
      </Card>
    </View>
  );
}
