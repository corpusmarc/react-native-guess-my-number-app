import { View, Text } from "react-native";

import styles from "./Guess.style";

export default function Guess({ id, guess }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>#{id}</Text>
      <Text style={styles.text}>
        Opponent's Guess: <Text style={styles.textHighlight}>{guess}</Text>
      </Text>
    </View>
  );
}
