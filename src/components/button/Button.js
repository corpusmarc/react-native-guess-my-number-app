import { Pressable, Text } from "react-native";

import styles from "./Button.style";

export default function Button({ text, containerStyle, disabled, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [
        styles.container,
        containerStyle,
        pressed && styles.pressed,
      ]}
    >
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
}
