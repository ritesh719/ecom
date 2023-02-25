import { Picker } from "@react-native-picker/picker";
import axios from "axios";
import React, { useState } from "react";
import {
  Platform,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import TopHeader from "../components/TopHeader";

export default function Register({ navigation }) {
  const [email, setemail] = useState(null);
  const [fname, setfname] = useState(null);
  const [lname, setlname] = useState(null);
  const [phone, setphone] = useState(null);
  const [bank, setbank] = useState(null);
  const [address, setaddress] = useState(null);
  const [uname, setuname] = useState(null);
  const [account, setaccount] = useState(null);
  const [password, setpassword] = useState(null);

  const register = () => {
    axios.post("https://qasstly.com/api/register.php", {email: email, fname: fname, lname: lname, phone: phone, bank: bank, address: address, uname: uname, account: account, password: password}).then((res) => {
        if(res.data.code == 200){
            alert('Registration Successfull. Please Login');
            navigation.navigate('Login')
        }else{
            alert(res.data.msg)
        }
    })
  }

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: "#fff",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <TopHeader navigation={navigation} />

      <View style={{ padding: 20 }}>
        <Text
          style={{
            textAlign: "center",
            fontSize: 32,
            borderBottomWidth: 0.7,
            paddingHorizontal: 10,
            paddingVertical: 30,
          }}
        >
          Register
        </Text>

        <TextInput
          onChangeText={(t) => setemail(t)}
          placeholder="Email"
          style={{
            borderWidth: 1,
            padding: 10,
            marginTop: 20,
            borderRadius: 3,
            borderColor: "#444",
          }}
        />
        <TextInput
          onChangeText={(t) => setuname(t)}
          placeholder="Username"
          style={{
            borderWidth: 1,
            padding: 10,
            marginTop: 20,
            borderRadius: 3,
            borderColor: "#444",
          }}
        />
        <TextInput
          onChangeText={(t) => setfname(t)}
          placeholder="First Name"
          style={{
            borderWidth: 1,
            padding: 10,
            marginTop: 20,
            borderRadius: 3,
            borderColor: "#444",
          }}
        />
        <TextInput
          onChangeText={(t) => setlname(t)}
          placeholder="Last Name"
          style={{
            borderWidth: 1,
            padding: 10,
            marginTop: 20,
            borderRadius: 3,
            borderColor: "#444",
          }}
        />
        <TextInput
          onChangeText={(t) => setphone(t)}
          placeholder="Phone"
          style={{
            borderWidth: 1,
            padding: 10,
            marginTop: 20,
            borderRadius: 3,
            borderColor: "#444",
          }}
        />
        <TextInput
          onChangeText={(t) => setaddress(t)}
          placeholder="Address"
          style={{
            borderWidth: 1,
            padding: 10,
            marginTop: 20,
            borderRadius: 3,
            borderColor: "#444",
          }}
        />
        <View
          style={{
            borderWidth: 1,
            borderColor: "#444",
            marginTop: 20,
          }}
        >
          <Picker
            onValueChange={(itemValue, itemIndex) => setbank(itemValue)}
            style={{
              backgroundColor: "#fff",
              width: "100%",
            }}
            selectedValue={bank}
          >
            <Picker.Item value="" label="Select Bank" />
            <Picker.Item value="10" label="مصرف الشرق" />
            <Picker.Item value="11" label="مصرف الأعمال" />
            <Picker.Item value="12" label="المصرف المركزي" />
            <Picker.Item value="13" label="مصرف الأموال" />
            <Picker.Item value="14" label="مصرف المشاريع" />
          </Picker>
        </View>
        <TextInput
          onChangeText={(t) => setaccount(t)}
          placeholder="Account Number"
          style={{
            borderWidth: 1,
            padding: 10,
            marginTop: 20,
            borderRadius: 3,
            borderColor: "#444",
          }}
        />
        <TextInput
          onChangeText={(t) => setpassword(t)}
          placeholder="Password"
          secureTextEntry
          style={{
            borderWidth: 1,
            padding: 10,
            marginTop: 20,
            borderRadius: 3,
            borderColor: "#444",
          }}
        />

        <TouchableOpacity
          style={{ display: "flex", marginTop: 40 }}
          onPress={() => {register()}}
        >
          <Text
            style={{
              backgroundColor: "red",
              padding: 20,
              color: "#fff",
              fontWeight: "700",
              textAlign: "center",
              borderRadius: 5,
              fontSize: 15,
            }}
          >
            Sign In
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ display: "flex", marginTop: 40 }}
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          <Text
            style={{
              padding: 20,
              color: "#000",
              fontWeight: "700",
              textAlign: "center",
              borderRadius: 5,
              fontSize: 15,
            }}
          >
            Already a User? Login
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
