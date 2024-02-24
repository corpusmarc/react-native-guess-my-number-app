import { useState } from "react";
import { StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from "expo-font";

import Background from "./src/components/background/Background";
import Loading from "./src/screens/loading/Loading";
import StartScreen from "./src/screens/start-screen/StartScreen";
import GameScreen from "./src/screens/game-screen/GameScreen";
import EndScreen from "./src/screens/end-screen/EndScreen";

export default function App() {
  const [fontsLoaded] = useFonts({
    poppins: require("./assets/fonts/Poppins-Regular.ttf"),
    "poppins-bold": require("./assets/fonts/Poppins-Bold.ttf"),
  });

  const [screen, setScreen] = useState("StartScreen");

  return (
    <>
      <StatusBar style="light" />
      <Background>
        <SafeAreaProvider>
          <SafeAreaView style={styles.container}>
            {!fontsLoaded && <Loading />}
            {fontsLoaded && screen === "StartScreen" && <StartScreen />}
            {fontsLoaded && screen === "GameScreen" && <GameScreen />}
            {fontsLoaded && screen === "EndScreen" && <EndScreen />}
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
