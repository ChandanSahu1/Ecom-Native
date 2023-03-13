import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import React from "react";

const Sidebar = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{ height: 5, width: "100%", backgroundColor: "blue" }}
      ></View>

      <Image
        source={require("./Images/user.jpg")}
        style={{
          width: 80,
          height: 80,
          alignSelf: "center",

          marginTop: 10,
        }}
      />

      <Text
        style={{
          fontSize: 20,
          fontWeight: "700",
          color: "#000",
          marginTop: 20,
          alignSelf: "center",
        }}
      >
        Dinesh-Nxg16
      </Text>
      <View style={{ marginTop: 70, width: "100%" }}>
        <FlatList
          data={[
            { icon: require("./Images/order.png"), title: "Orders" },
            { icon: require("./Images/cart.png"), title: "Cart" },
            {
              icon: require("./Images/notification.png"),
              title: "Notifications",
            },
            { icon: require("./Images/support.png"), title: "support" },
            { icon: require("./Images/share.webp"), title: "Share App" },
            { icon: require("./Images/rating.png"), title: "Rate Us" },
          ]}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity
                style={{
                  width: "100%",
                  flexDirection: "row",
                  alignItems: "center",
                  height: 60,
                }}
                onPress={() => {
                  navigation.closeDrawer();
                  alert(item.title + "  slected");
                }}
              >
                <Image
                  source={item.icon}
                  style={{
                    width: 24,
                    height: 24,

                    marginLeft: 15,
                  }}
                />

                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("Order");
                  }}
                >
                  <Text
                    style={{
                      fontSize: 22,
                      color: "#000",
                      fontWeight: "500",
                      marginLeft: 15,
                    }}
                  >
                    {item.title}
                  </Text>
                </TouchableOpacity>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
};

export default Sidebar;
