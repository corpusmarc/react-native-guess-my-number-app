import { StyleSheet } from "react-native";

import colors from "../../constants/colors";

const styles = StyleSheet.create({
  container: {
    gap: 40,
  },
  cardContent: {
    alignItems: "center",
    gap: 28,
  },
  label: {
    color: colors.white,
    fontSize: 24,
  },
  textInput: {
    borderBottomColor: colors.yellow,
    borderBottomWidth: 2,
    fontSize: 32,
    fontWeight: "bold",
    color: colors.yellow,
    textAlign: "center",
    width: 50,
  },
  buttonsContainer: {
    flexDirection: "row",
    gap: 12,
  },
});

export default styles;
