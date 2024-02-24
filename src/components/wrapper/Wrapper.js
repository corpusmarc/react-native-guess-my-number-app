import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import Background from "../background/Background";
import styles from "./Wrapper.style";

export default function Wrapper({ children }) {
  return (
    <>
      <StatusBar style="light" />
      <Background>
        <SafeAreaProvider>
          <SafeAreaView style={styles.container}>{children}</SafeAreaView>
        </SafeAreaProvider>
      </Background>
    </>
  );
}
