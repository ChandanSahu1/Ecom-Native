import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../Bottoms/Home";
import Setting from "../Bottoms/Setting";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";


const Bottom = createBottomTabNavigator();
const Homescreen = () => {
  return (
    <Bottom.Navigator>
      <Bottom.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Bottom.Screen
        name="Setting"
        component={Setting}
        options={{
          headerShown: false,

          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="Setting" color={color} size={size} />
          ),
        }}
      />
     
    </Bottom.Navigator>
  );
};

export default Homescreen;
