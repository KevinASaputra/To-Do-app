import { useCallback, useEffect, useState } from "react";
import * as Font from "expo-font";
import { Main } from "./src/Main";

import { fonts } from "./src/theme/fonts";

export default function App() {
  // const [fontsLoaded] = useFonts(fonts);

  // const onLayoutRootView = useCallback(async () => {
  //   if (fontsLoaded) {
  //     await SplashScreen.hideAsync();
  //   }
  // }, [fontsLoaded]);

  // useEffect(() => {
  //   onLayoutRootView();
  // }, []);

  // if (!fontsLoaded) {
  //   return null;
  // }

  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync(fonts);
      setFontsLoaded(true);
    }

    loadFonts();
  }, []);

  if (!fontsLoaded) return null;

  return <Main />;
}
