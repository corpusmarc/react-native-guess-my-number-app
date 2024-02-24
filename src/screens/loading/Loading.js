import { View, ActivityIndicator } from "react-native";

import styles from "./Loading.style";
import colors from "../../constants/colors";

export default function Loading() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={colors.white} />
    </View>
  );
}
