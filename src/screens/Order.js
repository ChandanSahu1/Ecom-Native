import { View, Text, Modal, Dimensions, Image } from "react-native";
import React, { useState } from "react";

import { TouchableOpacity } from "react-native";

const { height, width } = Dimensions.get("window");
const Order = ({navigation}) => {
  const [visible, setVisible] = useState(false);


  const goback=()=>
  {
    navigation.navigate('Order')
  }
  return (

    
    <TouchableOpacity
      style={{ flex: 1 }}
      onPress={() => {
        setVisible(true);
      }}
    >

      <Text onPress={goback}>Go Back</Text>
      <Modal visible={visible} transparent={true} onRequestClose={() => {}}>
        <View
          style={{
            width: width,
            height: height,
            backgroundColor: "rgba(0,0,0,.5)",
          }}
        >
          <View
            style={{
              position: "absolute",
              right: 10,
              bottom: 10,
              alignItems: "center",
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <View>
                <Text
                  style={{ color: "#fff", fontSize: 25, fontWeight: "700" }}
                >
                  Your Order
                </Text>
                <Text
                  style={{ color: "#fff", fontSize: 25, fontWeight: "700" }}
                >
                  Pan Dekivered
                </Text>
                <Text
                  style={{ color: "#fff", fontSize: 25, fontWeight: "700" }}
                >
                  In India
                </Text>
              </View>

              <TouchableOpacity
                onPress={() => {
                  setVisible(false);
                }}
              >
                <Image
                  style={{ width: 25, height: 22, borderRadius: 10 }}
                  source={require("../Images/close.jpg")}
                />
              </TouchableOpacity>
            </View>

            <Image
              style={{ width: 250, height: 220, borderRadius: 10 }}
              source={require("../Images/deliver.jpg")}
            />
          </View>
        </View>
      </Modal>

      <Image   style={{ width: "100%", height: "100%", borderRadius: 10 ,resizeMode:'cover'}}
              source={require("../Images/jio.webp")}/>

     
    </TouchableOpacity>
  );
};

export default Order;
