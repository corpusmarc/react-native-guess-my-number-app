import { StatusBar } from "expo-status-bar";
import { ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import styles from "./Background.style";
import background from "../../../assets/images/background.png";

export default function Background({ children }) {
  return (
    <LinearGradient
      colors={["#4D0060", "#2C0663", "#200354"]}
      style={styles.container}
    >
      <StatusBar style="light" />
      <ImageBackground
        source={background}
        style={styles.container}
        imageStyle={styles.backgroundImage}
      >
        {children}
      </ImageBackground>
    </LinearGradient>
  );
}
