import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  TextInput,
  Touchable,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { FlatList } from "react-native";

const Home = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  const [oldproducts, setOldProducts] = useState([]);
  const [search, setSearch] = useState("");

  const searchref = useRef();

  useEffect(() => {
    getdata();
  }, []);

  const getdata = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
        setOldProducts(json);
      });
  };
  const onSearch = (txt) => {
    if(txt==''
    ){
setProducts(oldproducts)
    }else
    {
      let templist = products.filter((item) => {
        return item.title.toLowerCase().indexOf(txt.toLowerCase()) > -1;
      });
      setProducts(templist);
    }
 
  };
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          width: "100%",
          height: 60,
          flexDirection: "row",
          alignItems: "center",
          elevation: 3,
          backgroundColor: "white",
        }}
      >
        <TouchableOpacity
          style={{ marginLeft: 15 }}
          onPress={() => {
            navigation.openDrawer();
          }}
        >
          <Image
            source={require("../Images/menu.png")}
            style={{ width: 30, height: 30 }}
          />
        </TouchableOpacity>

        <Text style={{ fontSize: 18, fontWeight: "600", marginLeft: 15 }}>
          React Navigation
        </Text>
      </View>
      <Image
        source={require("../Images/banner.jpg")}
        style={{
          width: "95%",
          height: 180,
          borderRadius: 10,
          alignSelf: "center",
          marginTop: 20,
        }}
      />

      <Text
        style={{
          marginLeft: 15,
          fontSize: 28,
          fontWeight: "600",
          color: "#000",
          marginTop: 20,
          alignItems: "center",
          textAlign: "center",
          backgroundColor: "lightgreen",
        }}
      >
        Our Products
      </Text>

      <View
        style={{
          width: "80%",
          height: 50,
          borderRadius: 10,
          borderWidth: 0.2,
          flexDirection: "row",
          alignItems: "center",
          marginLeft: 15,
          marginTop: 20,
        }}
      >
        <Image
          source={require("../Images/searcch.jpg")}
          style={{ width: 24, height: 24, marginLeft: 15, opacity: 0.5 }}
        />

        <TextInput
          placeholder="Search Item Here...."
          ref={searchref}
          value={search}
          style={{ width: "80%", height: 50 }}
          onChangeText={(txt) => {
            onSearch(txt);
            setSearch(txt);
          }}
        />
        <TouchableOpacity
          style={{ marginLeft: 15 }}
          onPress={() => {
            searchref.current.clear();
            onSearch('');
            setSearch("");
          }}
        >
          <Image
            source={require("../Images/close.jpg")}
            style={{ width: 20, height: 20, opacity: 0.5 }}
          />
        </TouchableOpacity>
      </View>
      <FlatList
        data={products}
        renderItem={({ item, index }) => {
          return (
            <View style={styles.itemv}>
              <TouchableOpacity>
                {" "}
                <Image source={{ uri: item.image }} style={styles.pdimg} />
              </TouchableOpacity>

              <View style={styles.namev}>
                <TouchableOpacity>
                  <Text>{item.title}</Text>
                </TouchableOpacity>
                <Text>
                  {item.description.length > 30
                    ? item.description.substring(0, 20) + "..."
                    : item.description}
                </Text>
                <Text style={styles.price}>{"Rs " + item.price}</Text>
                <Text style={styles.rating}>{  item.rating.rate +"*"}</Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemv: {
    width: "90%",
    height: 100,
    backgroundColor: "white",
    alignSelf: "center",
    marginTop: 10,
    flexDirection: "row",
    borderRadius: 10,
  },
  pdimg: {
    width: 100,
    height: 100,
  },
  namev: {
    paddingLeft: 20,
    paddingRight: 10,
  },
  price: {
    fontSize: 20,
    fontWeight: "600",
    color: "green",
  },
  rating: {
    fontSize: 20,
    fontWeight: "600",
    color: "#DDAC17",
    marginLeft: 80,
    marginBottom: 80,
  },
});
