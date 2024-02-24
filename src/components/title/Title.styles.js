import { StyleSheet } from "react-native";

import colors from "../../constants/colors";

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: colors.white,
    borderRadius: 6,
    padding: 12,
  },
  text: {
    fontSize: 28,
    fontFamily: "poppins-bold",
    color: colors.white,
    textAlign: "center",
  },
  textHighlight: {
    color: colors.yellow,
  },
});

export default styles;
