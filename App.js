import { useState } from "react";
import { useFonts } from "expo-font";

import Wrapper from "./src/components/wrapper/Wrapper";
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
    <Wrapper>
      {!fontsLoaded && <Loading />}
      {fontsLoaded && screen === "StartScreen" && <StartScreen />}
      {fontsLoaded && screen === "GameScreen" && <GameScreen />}
      {fontsLoaded && screen === "EndScreen" && <EndScreen />}
    </Wrapper>
  );
}
