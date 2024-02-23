import { LinearGradient } from "expo-linear-gradient";

import styles from "./Card.styles";

export default function Card({ children }) {
  return (
    <LinearGradient
      colors={["#530050", "#420198"]}
      start={[0, 1]}
      end={[1, 0]}
      style={styles.container}
    >
      {children}
    </LinearGradient>
  );
}
