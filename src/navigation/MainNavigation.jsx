import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../screens/HomeScreen";
import { useColorScheme } from "react-native";
import { colors } from "../theme/colors";
import { CreateScreen } from "../screens/CreateScreen";

const Stack = createNativeStackNavigator();

export const MainNavigation = () => {
  const colorScheme = useColorScheme();
  const darkTheme = colorScheme === "dark";

  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false,
          statusBarStyle: darkTheme ? "light" : "dark",
          statusBarColor: darkTheme ? colors.black : colors.white,
          statusBarTranslucent: true,
        }}
        component={HomeScreen}
        name="Home"
      />
      <Stack.Screen
        options={{
          headerShown: false,
          statusBarStyle: darkTheme ? "light" : "dark",
          statusBarColor: darkTheme ? colors.black : colors.white,
          statusBarTranslucent: true,
        }}
        component={CreateScreen}
        name="Create"
      />
    </Stack.Navigator>
  );
};
