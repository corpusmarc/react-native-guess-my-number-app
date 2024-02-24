import { StyleSheet } from "react-native";

import colors from "../../constants/colors";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#670FFF",
    marginVertical: 8,
    padding: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 20,
  },
  text: {
    color: colors.lightgray,
    fontSize: 16,
    fontFamily: "poppins",
  },
  textHighlight: {
    color: colors.yellow,
    fontFamily: "poppins-bold",
  },
});

export default styles;
