import Routes from "./src/routes";
import { useFonts } from "expo-font";

export default function App() {
  const [fontsLoaded] = useFonts({
    Alegreya: require("./assets/fonts/Alegreya.ttf"),
  });

  if (!fontsLoaded) {
    return;
  }

  return <Routes />;
}
