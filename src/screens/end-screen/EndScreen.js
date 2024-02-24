import { View, ImageBackground, Text } from "react-native";

import Title from "../../components/title/Title";
import Button from "../../components/button/Button";
import styles from "./EndScreen.style";
import success from "../../../assets/images/success.png";

export default function EndScreen({ rounds, input, onRestart }) {
  return (
    <View style={styles.container}>
      <Title text="Game Over" />

      <ImageBackground source={success} style={styles.image} />

      <Text style={styles.text}>
        Your phone needed
        <Text style={styles.textHighlight}> {rounds} </Text>
        rounds to guess the number
        <Text style={styles.textHighlight}> {input}</Text>.
      </Text>

      <Button text="Start New Game" onPress={onRestart} />
    </View>
  );
}
