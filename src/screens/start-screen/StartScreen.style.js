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
  textInput: {
    borderBottomColor: colors.yellow,
    borderBottomWidth: 2,
    fontSize: 32,
    fontFamily: "poppins-bold",
    color: colors.yellow,
    textAlign: "center",
    width: 50,
  },
  buttonsContainer: {
    flexDirection: "row",
    gap: 12,
  },
  button: {
    width: "40%",
  },
  resetButton: {
    backgroundColor: colors.lightgray,
  },
  disabledButton: {
    backgroundColor: colors.lightgray,
  },
});

export default styles;
