import { useIsFocused } from "@react-navigation/native";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import {
    Alert,
  Platform,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import TopHeader from "../components/TopHeader";
import { AuthContext } from "../src/AuthProvider";

export default function Login({ navigation }) {
  const [email, setemail] = useState(null);
  const [password, setpassword] = useState(null);

  const {user, setUser} = useContext(AuthContext)

  const isFocused = useIsFocused()

  useEffect(() => {
    if(user){
        navigation.navigate('Dashboard')
    }
  }, [isFocused, user])
  

  const loginUser = () => {
    axios.post("https://qasstly.com/api/login.php", {email: email, password: password}).then((res) => {
        if(res.data.code == 200){
            setUser(res.data.data)
        }else{
            alert(res.data.status)
        }
    })
  };

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
          Login
        </Text>

        <TextInput
          onChangeText={(t) => setemail(t)}
          placeholder="Username"
          style={{
            borderWidth: 1,
            padding: 10,
            marginTop: 50,
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

        <TouchableOpacity style={{ display: "flex", marginTop: 40 }} onPress={() => {loginUser()}}>
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

        <TouchableOpacity style={{ display: "flex", marginTop: 40 }} onPress={() => {navigation.navigate('Register')}}>
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
            New User? Register Here
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
