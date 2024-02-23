import { View, Text } from "react-native";

import styles from "./Title.styles";

export default function Title({ text, texthighlight }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {text}
        {texthighlight && (
          <Text style={styles.texthighlight}>{` ${texthighlight}`}</Text>
        )}
      </Text>
    </View>
  );
}
