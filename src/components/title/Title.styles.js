import { StyleSheet } from "react-native";

import colors from "../../constants/colors";

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: colors.white,
    borderRadius: 6,
    padding: 16,
  },
  text: {
    fontSize: 32,
    fontWeight: "bold",
    color: colors.white,
    textAlign: "center",
  },
  textHighlight: {
    color: colors.yellow,
  },
});

export default styles;
