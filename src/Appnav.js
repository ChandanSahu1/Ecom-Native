import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import splace from "./screens/splace";
import Mainscreen from "./screens/Mainscreen";
import Order from "./screens/Order";

const stack = createNativeStackNavigator();

const Appnav = () => {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen
          name="splace"
          component={splace}
          options={{ headerShown: false }}
        />
        <stack.Screen
          name="mainscr"
          component={Mainscreen}
          options={{ headerShown: false }}
        />
         <stack.Screen
          name="Order"
          component={Order}
          options={{ headerShown: false }}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default Appnav;
