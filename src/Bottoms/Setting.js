import React from "react";
import { FlatList, TouchableOpacity, View } from "react-native";
import { Text } from "react-native";
import { Image } from "react-native";

const Setting = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      
      <Image
        source={require('../Images/bck.jpg')}
        style={{ width: "15%", height: 40 ,marginTop:40,color:"black",marginLeft:5}}
      />
      <Text  style={{color:'#fff',marginLeft:5,flexDirection:'row'}}>Go Back</Text>
      

      <Text
        style={{
          fontSize: 25,
          fontWeight: "800",
          color: "#000",
          marginTop: 20,
          alignSelf: "center",
          color:'red'
        }}
      >
        Setting
      </Text>
      <View style={{ marginTop: 70, width: "100%" }}>
        <FlatList
          data={[
            { icon: require("../Images/device.webp"), title: "Divices" },
            { icon: require("../Images/system.webp"), title: "System" },
            {
              icon: require("../Images/time.jpg"),
              title: "Notifications",
            },
            { icon: require("../Images/support.png"), title: "support" },
            { icon: require("../Images/share.webp"), title: "Share App" },
            { icon: require("../Images/network.jpg"), title: "Network And Internet" },
         
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
              
              >
                <Image
                  source={item.icon}
                  style={{
                    width: 34,
                    height: 34,

                    marginLeft: 15,
                  }}
                />

                <TouchableOpacity
                 
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
export default Setting;
