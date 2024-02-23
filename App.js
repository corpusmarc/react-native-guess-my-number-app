import { StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import Background from "./src/components/background/Background";
import StartScreen from "./src/screens/start-screen/StartScreen";

export default function App() {
  return (
    <Background>
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <StartScreen />
        </SafeAreaView>
      </SafeAreaProvider>
    </Background>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
});
