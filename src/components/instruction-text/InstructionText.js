import { Text } from "react-native";

import styles from "./InstructionText.style";

export default function InstructionText({ text }) {
  return <Text style={styles.text}>{text}</Text>;
}
