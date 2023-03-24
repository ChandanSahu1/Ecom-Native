import * as React from "react";
import {
  Pressable,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Padding, Border } from "../GlobalStyles";

const NxgLogin = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.nxgLogin}>
      <Image
        style={styles.nxgLoginChild}
        resizeMode="cover"
        source={require("../assets/rectangle-5.png")}
      />
      <Text style={[styles.email, styles.emailTypo]}>Email</Text>
      <Text style={[styles.password, styles.emailTypo]}>Password</Text>
      <Pressable
        style={styles.forgotPasswordContainer}
        onPress={() => navigation.navigate("NxgForgot")}
      >
        <Text style={styles.forgotPassword}>Forgot Password ?</Text>
      </Pressable>
      <Text style={styles.login}>Login</Text>
      <Image
        style={styles.nxgLoginItem}
        resizeMode="cover"
        source={require("../assets/rectangle-2.png")}
      />
      <Image
        style={styles.n1Icon}
        resizeMode="cover"
        source={require("../assets/151700118-103277031813459-6424278733152855627-n-2.png")}
      />
      <TextInput
        style={[styles.nxgLoginInner, styles.nxgLoginInnerShadowBox]}
        placeholder="Enter Email Address"
        keyboardType="email-address"
        placeholderTextColor="#a49d9d"
      />
      <TextInput
        style={[styles.frameTextinput, styles.nxgLoginInnerShadowBox]}
        placeholder="Enter Password"
        keyboardType="email-address"
        placeholderTextColor="#a49d9d"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  emailTypo: {
    textAlign: "left",
    color: Color.black,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    left: 32,
    position: "absolute",
  },
  nxgLoginInnerShadowBox: {
    justifyContent: "space-between",
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_6xl,
    flexDirection: "row",
    width: 346,
    borderWidth: 1,
    borderColor: "#000",
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.palegoldenrod,
    borderRadius: Border.br_3xs,
    left: 22,
    position: "absolute",
    overflow: "hidden",
  },
  nxgLoginChild: {
    top: 558,
    left: 186,
    borderRadius: Border.br_mini,
    width: 191,
    height: 75,
    position: "absolute",
  },
  email: {
    top: 296,
    width: 84,
  },
  password: {
    top: 416,
    width: 117,
  },
  forgotPassword: {
    fontSize: 16,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: "#010101",
    width: 149,
    height: 27,
    textAlign: "center",
  },
  forgotPasswordContainer: {
    top: 582,
    left: 32,
    position: "absolute",
  },
  login: {
    top: 572,
    left: 235,
    fontSize: 24,
    color: Color.gray_100,
    width: 75,
    height: 32,
    textAlign: "center",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    position: "absolute",
  },
  nxgLoginItem: {
    top: 56,
    left: 17,
    borderRadius: Border.br_xl,
    width: 358,
    height: 189,
    position: "absolute",
  },
  n1Icon: {
    top: 67,
    left: 39,
    borderRadius: Border.br_7xl,
    width: 305,
    height: 168,
    position: "absolute",
  },
  nxgLoginInner: {
    top: 331,
  },
  frameTextinput: {
    top: 456,
  },
  nxgLogin: {
    backgroundColor: Color.goldenrod,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default NxgLogin;
