import { StyleSheet } from "react-native";

import colors from "../../constants/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  buttonsContainer: {
    flexDirection: "row",
    gap: 12,
  },
  guessesContainer: {
    flex: 1,
  },
});

export default styles;
