import { StyleSheet } from "react-native";

import colors from "../../constants/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 40,
  },
  image: {
    width: 320,
    aspectRatio: 1,
    borderWidth: 2,
    borderColor: colors.yellow,
    borderRadius: 160,
    overflow: "hidden",
  },
  text: {
    color: colors.white,
    fontSize: 20,
    textAlign: "center",
    lineHeight: 28,
  },
  textHighlight: {
    color: colors.yellow,
    fontWeight: "bold",
  },
});

export default styles;
