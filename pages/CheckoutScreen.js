import { useIsFocused } from "@react-navigation/native";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import {
  Image,
  Platform,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  View,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import TopHeader from "../components/TopHeader";
import { AuthContext } from "../src/AuthProvider";

export default function CheckoutScreen({ navigation }) {
  const { user, cart, setCart } = useContext(AuthContext);

  const [total, settotal] = useState(0)

  const isFocused = useIsFocused();

  const checkoutOrder = () => {

    let pcount = 0;

    cart.map((res) => {
        pcount++;
    })

    let postd = {uid: user.id, fname: user.firstname, lname: user.lastname, username: user.username, email: user.email, phone: user.phone, address: user.address, bank: user.bank, products_count: pcount, pay_price: total, products: cart }

    axios.post("https://qasstly.com/api/orderNew.php", postd).then((res) => {
        alert(res.data);
        setCart([]);
        navigation.navigate('Dashboard');
    })
  }

  useEffect(() => {
    console.log('====================================');
    console.log(cart);
    console.log(user);
    console.log('====================================');
    let t = 0
    cart.map((it) => {
       let fp = it.normal_price - (it.discount * it.normal_price / 100)

       t += parseFloat(fp)
    })

    settotal(t)
  }, [isFocused]);

  if(cart.length < 1 && !user){
    navigation.navigate('Dashboard')
  }

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: "#fff",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
      scrollEnabled
    >
      <TopHeader navigation={navigation} />

      <View style={{ borderWidth: 1, margin: 10, padding: 10 }}>
        <Text style={{ fontSize: 16, marginBottom: 20 }}>Billing Details</Text>

        <TextInput
          value={user.email}
          style={{
            padding: 5,
            borderWidth: 0.5,
            marginVertical: 8,
            backgroundColor: "#eee",
            color: "#000",
          }}
          editable={false}
        />
        <TextInput
          value={user.firstname}
          style={{
            padding: 5,
            borderWidth: 0.5,
            marginVertical: 8,
            backgroundColor: "#eee",
            color: "#000",
          }}
          editable={false}
        />
        <TextInput
          value={user.lastname}
          style={{
            padding: 5,
            borderWidth: 0.5,
            marginVertical: 8,
            backgroundColor: "#eee",
            color: "#000",
          }}
          editable={false}
        />
        <TextInput
          value={user.address}
          style={{
            padding: 5,
            borderWidth: 0.5,
            marginVertical: 8,
            backgroundColor: "#eee",
            color: "#000",
          }}
          editable={false}
        />
        <TextInput
          value={user.phone}
          style={{
            padding: 5,
            borderWidth: 0.5,
            marginVertical: 8,
            backgroundColor: "#eee",
            color: "#000",
          }}
          editable={false}
        />
      </View>

      <View style={{ borderWidth: 1, margin: 10, padding: 10 }}>
        <Text
          style={{
            fontSize: 16,
            marginBottom: 20,
            color: "red",
            fontWeight: "bold",
          }}
        >
          Payment Details
        </Text>

        <TextInput
          value={user.bank_acc_no}
          style={{
            padding: 5,
            borderWidth: 0.5,
            marginVertical: 8,
            backgroundColor: "#eee",
            color: "#000",
          }}
          editable={false}
        />
        <TextInput
          value={user.financier}
          style={{
            padding: 5,
            borderWidth: 0.5,
            marginVertical: 8,
            backgroundColor: "#eee",
            color: "#000",
          }}
          editable={false}
        />
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
              <View style={{ flex: 0.8, padding: 10 }}>
                <Text style={{ paddingHorizontal: 10 }}>{c.title}</Text>
              </View>
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


      <View style={{ borderWidth: 1, margin: 10, padding: 10 }}>
        <Text
          style={{
            fontSize: 16,
            marginBottom: 20,
            color: "red",
            fontWeight: "bold",
          }}
        >
          Checkout
        </Text>

        <Text style={{fontWeight: '800', fontSize: 16}}>Total: IQD {total}</Text>

        <TouchableOpacity style={{backgroundColor: 'red', justifyContent: 'flex-end', marginTop: 15}} onPress={() => {checkoutOrder()}}>
            <Text style={{padding: 10, color: '#fff', fontWeight: '600', textAlign: 'center'}}>Checkout</Text>
        </TouchableOpacity>
        
      </View>



      <View style={{ margin: 50 }}></View>
    </ScrollView>
  );
}
