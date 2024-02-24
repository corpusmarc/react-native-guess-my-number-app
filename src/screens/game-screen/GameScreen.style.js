import { StyleSheet } from "react-native";

import colors from "../../constants/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 40,
  },
  titleContainer: {
    borderColor: colors.yellow,
  },
  titleText: {
    color: colors.yellow,
  },
  cardContent: {
    alignItems: "center",
    gap: 28,
  },
  buttonsContainer: {
    flexDirection: "row",
    gap: 12,
  },
  button: {
    width: "40%",
  },
  guessesContainer: {
    flex: 1,
  },
});

export default styles;
