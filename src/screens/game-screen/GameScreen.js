import { View, FlatList } from "react-native";

import Title from "../../components/title/Title";
import Card from "../../components/card/Card";
import InstructionText from "../../components/instruction-text/InstructionText";
import Button from "../../components/button/Button";
import Guess from "../../components/guess/Guess";
import styles from "./GameScreen.style";

export default function GameScreen() {
  const guesses = [
    { id: 3, guess: 28 },
    { id: 2, guess: 84 },
    { id: 1, guess: 56 },
  ];

  return (
    <View style={styles.container}>
      <Title text="Opponent's Guess" />

      <Title
        text="57"
        containerStyle={style.titleContainer}
        textStyle={styles.titleText}
      />

      <Card>
        <View style={styles.cardContent}>
          <InstructionText text="Higher or Lower?" />

          <View style={styles.buttonsContainer}>
            <Button text="-" containerStyle={styles.button} />
            <Button text="+" containerStyle={styles.button} />
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
