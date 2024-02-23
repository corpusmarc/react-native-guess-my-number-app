import { View, Text, FlatList } from "react-native";

import Title from "../../components/title/Title";
import Card from "../../components/card/Card";
import Button from "../../components/button/Button";
import Guess from "../../components/guess/Guess";
import styles from "./GameScreen.style";
import colors from "../../constants/colors";

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
        containerStyle={{ borderColor: colors.yellow, padding: 32 }}
        textStyle={{ color: colors.yellow }}
      />

      <Card>
        <View style={styles.cardContent}>
          <Text style={styles.label}>Higher or Lower?</Text>

          <View style={styles.buttonsContainer}>
            <Button text="-" containerStyle={{ width: "40%" }} />
            <Button text="+" containerStyle={{ width: "40%" }} />
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
