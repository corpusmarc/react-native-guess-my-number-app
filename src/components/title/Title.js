import { View, Text } from "react-native";

import styles from "./Title.styles";

export default function Title({
  text,
  textHighlight,
  containerStyle,
  textStyle,
}) {
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={[styles.text, textStyle]}>
        {text}
        {textHighlight && (
          <Text style={styles.textHighlight}>{textHighlight}</Text>
        )}
      </Text>
    </View>
  );
}
