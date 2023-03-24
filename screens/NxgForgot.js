import * as React from "react";
import {
  Text,
  StyleSheet,
  Pressable,
  Image,
  TextInput,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const NxgForgot = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.nxgForgot}>
      <Text style={[styles.email, styles.emailTypo]}>Email</Text>
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("NxgLogin")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/rectangle-10.png")}
        />
      </Pressable>
      <Text
        style={[styles.resetPassword, styles.passwordTypo, styles.emailTypo]}
      >
        <Text style={styles.reset}>Reset</Text>
        <Text style={styles.text}>{` `}</Text>
        <Text style={styles.reset}>Password</Text>
      </Text>
      <Text style={[styles.forgotPassword, styles.passwordTypo]}>
        <Text style={styles.forgotPassword1}>Forgot Password</Text>
        <Text style={styles.text1}>{` `}</Text>
        <Text style={styles.text2}>{` `}</Text>
      </Text>
      <Image
        style={styles.nxgForgotChild}
        resizeMode="cover"
        source={require("../assets/rectangle-2.png")}
      />
      <Image
        style={styles.n2Icon}
        resizeMode="cover"
        source={require("../assets/151700118-103277031813459-6424278733152855627-n-2.png")}
      />
      <TextInput
        style={styles.nxgForgotItem}
        placeholder="Enter Email"
        keyboardType="email-address"
        placeholderTextColor="#a49d9d"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  emailTypo: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  passwordTypo: {
    textAlign: "center",
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  email: {
    top: 295,
    left: 36,
    textAlign: "left",
    width: 84,
    color: Color.black,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    position: "absolute",
  },
  icon: {
    borderRadius: Border.br_mini,
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 91,
    top: 411,
    width: 208,
    height: 66,
    position: "absolute",
  },
  reset: {
    color: Color.gray_100,
  },
  text: {
    color: Color.black,
  },
  resetPassword: {
    top: 430,
    left: 112,
    width: 166,
    height: 32,
  },
  forgotPassword1: {
    fontFamily: FontFamily.poppinsRegular,
  },
  text1: {
    fontFamily: FontFamily.interRegular,
  },
  text2: {
    fontStyle: "italic",
    fontWeight: "300",
    fontFamily: FontFamily.interLightItalic,
  },
  forgotPassword: {
    top: 257,
    left: 101,
    width: 196,
    height: 28,
    color: Color.black,
  },
  nxgForgotChild: {
    top: 57,
    left: 19,
    borderRadius: Border.br_xl,
    width: 358,
    height: 189,
    position: "absolute",
  },
  n2Icon: {
    top: 67,
    left: 46,
    borderRadius: Border.br_7xl,
    width: 305,
    height: 168,
    position: "absolute",
  },
  nxgForgotItem: {
    top: 331,
    left: 24,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.palegoldenrod,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
    width: 346,
    height: 58,
    flexDirection: "row",
    paddingHorizontal: Padding.p_6xl,
    paddingVertical: Padding.p_3xs,
    position: "absolute",
    overflow: "hidden",
  },
  nxgForgot: {
    backgroundColor: Color.goldenrod,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default NxgForgot;
