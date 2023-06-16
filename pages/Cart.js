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
    if (user) {
      navigation.navigate("Checkout");
    } else {
      navigation.navigate("Login");
    }
  };

  const removeFromCart = (pid) => {
    let new_cart = cart.filter((item) => {
      //callback function
      if (item.pid != pid) {
        //filtering criteria
        return item;
      }
    });

    setCart(new_cart);
  };

  const updateQty = (pid, qty) => {
    // console.log(qty);
    let new_cart_1 = [];
    cart.every((item) => {
      if (item.pid == pid) {
        new_cart_1.push({
          discount: item.discount,
          img: item.img,
          max_quantity: item.max_quantity,
          normal_price: item.normal_price,
          pid: item.pid,
          quantity: qty,
          sid: item.sid,
          title: item.title,
        });
      } else {
        new_cart_1.push(item);
      }

      return true;
    });

    console.log(new_cart_1);

    setCart(new_cart_1);
  };

  useEffect(() => {
    console.log(cart);
    // setCart([])
  }, [isFocused, cart]);

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
          عربة التسوق
        </Text>
      </View>


      {cart.length > 0 &&
        cart.map((c) => (
          <View
            style={{
              flexDirection: "row",
              flex: 1,
              borderWidth: 1,
              margin: 5,
              padding: 5,
            }}
          >
            <View
              style={{
                flexDirection: "column",
                flex: 0.6,
                justifyContent: "space-around",
              }}
            >
              <View>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("ProductDetails", { pid: c.pid });
                  }}
                >
                  <Text
                    style={{
                      fontWeight: "600",
                      textAlign: "right",
                      fontSize: 20,
                    }}
                    numberOfLines={1}
                  >
                    {c.title}
                  </Text>
                </TouchableOpacity>
              </View>
              <View>
                <View
                  style={{ flexDirection: "row", justifyContent: "flex-end" }}
                >
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "600",
                      textAlign: "right",
                      marginRight: 10,
                      color: "#888",
                      textDecorationStyle: "solid",
                      textDecorationLine: "line-through",
                      textDecorationColor: "#000",
                    }}
                  >
                    IQD {c.normal_price * c.quantity}
                  </Text>
                  {c.discount > 0 && (
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: "600",
                        textAlign: "right",
                      }}
                    >
                      IQD{" "}
                      {(c.normal_price - (c.discount * c.normal_price) / 100) *
                        c.quantity}
                    </Text>
                  )}
                  {c.discount <= 0 && (
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: "600",
                        textAlign: "right",
                      }}
                    >
                      IQD {c.normal_price * c.quantity}
                    </Text>
                  )}
                </View>
              </View>
              <View
                style={{ flexDirection: "row", justifyContent: "flex-end" }}
              >
                <TouchableOpacity
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingHorizontal: 10,
                    paddingVertical: 7,
                    borderRadius: 5,
                    backgroundColor: "red",
                  }}
                  onPress={() => {
                    removeFromCart(c.pid)
                  }}
                >
                  <MaterialCommunityIcons name="trash-can" color={"#fff"} />
                  <Text style={{ color: "#fff" }}>إزالة</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{ flexDirection: "column", flex: 0.4 }}>
              <View
                style={{ justifyContent: "flex-end", alignItems: "center" }}
              >
                <Image
                  source={{
                    uri: "https://qasstly.com/" + c.img,
                  }}
                  style={{ width: '80%', height: 80 }}
                />
              </View>
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Picker
                  onValueChange={(itemValue, itemIndex) =>
                    updateQty(c.pid, itemValue)
                  }
                  style={{
                    width: "100%",
                  }}
                  selectedValue={c.quantity}
                >
                  <Picker.Item value="1" label="كمية 1" />
                  <Picker.Item value="2" label="كمية 2" />
                  <Picker.Item value="3" label="كمية 3" />
                  <Picker.Item value="4" label="كمية 4" />
                  <Picker.Item value="5" label="كمية 5" />
                  <Picker.Item value="6" label="كمية 6" />
                  <Picker.Item value="7" label="كمية 7" />
                  <Picker.Item value="8" label="كمية 8" />
                  <Picker.Item value="9" label="كمية 9" />
                  <Picker.Item value="10" label="10 كمية" />
                </Picker>
              </View>
            </View>
          </View>
        ))}

      {cart.length > 0 && (
        <TouchableOpacity
          onPress={() => {
            proceedToBuy();
          }}
          style={{ backgroundColor: "red", margin: 10, padding: 10 }}
        >
          <Text
            style={{ textAlign: "center", color: "#fff", fontWeight: "600" }}
          >
            إكمال الطلب
          </Text>
        </TouchableOpacity>
      )}

      {cart.length < 1 && (
        <View>
          <Text style={{textAlign: 'center', padding: 10}}>لا توجد عناصر في سلة التسوق الخاصة بك</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Dashboard");
            }}
            style={{ backgroundColor: "red", margin: 10, padding: 10 }}
          >
            <Text
              style={{ textAlign: "center", color: "#fff", fontWeight: "600" }}
            >
              استمر في التسوق معنا
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </ScrollView>
  );
}
