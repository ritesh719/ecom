import React, { useContext, useEffect } from "react";
import {
  Image,
  Platform,
  ScrollView,
  StatusBar,
  Text,
  View,
} from "react-native";
import TopHeader from "../components/TopHeader";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import { useIsFocused } from "@react-navigation/native";
import { AuthContext } from "../src/AuthProvider";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Cart({ navigation }) {
  const isFocused = useIsFocused();

  const { cart, setCart, user } = useContext(AuthContext);

  const proceedToBuy = () => {
    if(user){
        navigation.navigate('Checkout')
    }else{
        navigation.navigate('Login')
    }
  }

  const removeFromCart = (pid) => {
    let new_cart = cart.filter( (item) => { //callback function
        if(item.pid != pid) { //filtering criteria
          return item;
        }
      })

      setCart(new_cart)
  }

  useEffect(() => {
    console.log(cart);
  }, [isFocused]);

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: "#fff",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <TopHeader navigation={navigation} />
      <View style={{ paddingHorizontal: 20 }}>
        <Text
          style={{
            textAlign: "center",
            fontSize: 28,
            borderBottomWidth: 0.7,
            paddingHorizontal: 10,
            paddingVertical: 10,
          }}
        >
          CART
        </Text>
      </View>

      {cart.length > 0 &&
        cart.map((c) => (
          <View style={{ borderWidth: 1, margin: 10 }}>
            <View style={{ flexDirection: "row", flex: 1 }}>
              <View style={{ flex: 0.2, padding: 10 }}>
                <Image
                  source={{
                    uri: "https://qasstly.com/" + c.img,
                  }}
                  style={{ width: 80, height: 80 }}
                />
              </View>
              <View style={{ flex: 0.7, padding: 10 }}>
                <Text style={{ paddingHorizontal: 10 }}>{c.title}</Text>
              </View>
              <TouchableOpacity style={{ flex: 0.1, padding: 10 }} onPress={() => {removeFromCart(c.pid)}}>
                <MaterialCommunityIcons
                  name="trash-can"
                  size={20}
                  color="tomato"
                />
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "row", flex: 1 }}>
              <View style={{ flex: 0.2, padding: 10 }}>
                <Text style={{ fontSize: 16, fontWeight: "600" }}>Price</Text>
              </View>
              <View style={{ flex: 0.8, padding: 10 }}>
                {c.discount > 0 && (
                  <Text
                    style={{
                      paddingHorizontal: 10,
                      fontSize: 16,
                      fontWeight: "600",
                      textAlign: "right",
                    }}
                  >
                    {c.normal_price - (c.discount * c.normal_price) / 100}
                  </Text>
                )}
                {c.discount <= 0 && (
                  <Text
                    style={{
                      paddingHorizontal: 10,
                      fontSize: 16,
                      fontWeight: "600",
                      textAlign: "right",
                    }}
                  >
                    {c.normal_price}
                  </Text>
                )}
              </View>
            </View>
            
          </View>
        ))}

    {cart.length > 0 && (
        <TouchableOpacity onPress={() => {proceedToBuy()}} style={{backgroundColor: 'red', margin: 10, padding: 10}}>
            <Text style={{textAlign: 'center', color: '#fff', fontWeight: '600'}}>Proceed to buy</Text>
        </TouchableOpacity>
    )}

    {cart.length < 1 && (
        <TouchableOpacity onPress={() => {navigation.navigate('Dashboard')}} style={{backgroundColor: 'red', margin: 10, padding: 10}}>
            <Text style={{textAlign: 'center', color: '#fff', fontWeight: '600'}}>Keep Shopping</Text>
        </TouchableOpacity>
    )}
    </ScrollView>
  );
}
