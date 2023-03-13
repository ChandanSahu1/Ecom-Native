import { View, Text } from "react-native";
import React from "react";

import Homescreen from "../Sidescreens/Homescreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { TabRouter } from "@react-navigation/native";
import Notifications from "../Sidescreens/Notifications";
import Sidebar from "../Sidebar";

const Drawer = createDrawerNavigator();

const Mainscreen = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <Sidebar {...props} />}>
      <Drawer.Screen
        name="Homescreen"
        component={Homescreen}
        options={{ headerShown: false }}
      />
      {/* <Drawer.Screen name='Notifications' component={Notifications} options={{headerShown:TabRouter}} /> */}
    </Drawer.Navigator>
  );
};

export default Mainscreen;
