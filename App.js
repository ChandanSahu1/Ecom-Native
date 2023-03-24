const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import NxgForgot from "./screens/NxgForgot";
import NxgLogin from "./screens/NxgLogin";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const [fontsLoaded, error] = useFonts({
    Poppins: require("./assets/fonts/Poppins.ttf"),
    Poppins_regular: require("./assets/fonts/Poppins_regular.ttf"),
    Poppins_medium: require("./assets/fonts/Poppins_medium.ttf"),
    Poppins_bold: require("./assets/fonts/Poppins_bold.ttf"),
    Inter: require("./assets/fonts/Inter.ttf"),
    Inter_regular: require("./assets/fonts/Inter_regular.ttf"),
    Inter_light_italic: require("./assets/fonts/Inter_light_italic.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="NxgForgot"
              component={NxgForgot}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="NxgLogin"
              component={NxgLogin}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
