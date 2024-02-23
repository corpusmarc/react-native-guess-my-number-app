import { StyleSheet } from "react-native";

import colors from "../../constants/colors";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.yellow,
    borderRadius: 20,
    padding: 12,
  },
  text: {
    color: colors.black,
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
  pressed: {
    opacity: 0.9,
  },
});

export default styles;
