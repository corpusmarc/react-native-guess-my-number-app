import { StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import Background from "./src/components/background/Background";
import StartScreen from "./src/screens/start-screen/StartScreen";
import GameScreen from "./src/screens/game-screen/GameScreen";
import EndScreen from "./src/screens/end-screen/EndScreen";

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <Background>
        <SafeAreaProvider>
          <SafeAreaView style={styles.container}>
            <StartScreen />
            {/* <GameScreen /> */}
            {/* <EndScreen /> */}
          </SafeAreaView>
        </SafeAreaProvider>
      </Background>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
});
