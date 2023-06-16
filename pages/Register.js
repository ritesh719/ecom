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
import validator from 'validator';

export default function Register({ navigation }) {
  const [email, setemail] = useState(null);
  const [fname, setfname] = useState(null);
  const [lname, setlname] = useState(null);
  const [phone, setphone] = useState(null);
  const [bank, setbank] = useState(10);
  const [address, setaddress] = useState(null);
  const [uname, setuname] = useState(null);
  const [account, setaccount] = useState(null);
  const [password, setpassword] = useState(null);

  const register = () => {

    if(email && fname && lname && phone && bank && address && uname && account && password){
      
      if(email && validator.isEmail(email)){

        if(phone && phone.startsWith("+9647")){

          if(validator.isAlpha(fname)){
            if(validator.isAlpha(lname)){
              axios.post("https://qasstly.com/api/register.php", {email: email, fname: fname, lname: lname, phone: phone, bank: bank, address: address, uname: uname, account: account, password: password}).then((res) => {
                  if(res.data.code == 200){
                      alert('تم التسجيل بنجاح. الرجاء تسجيل الدخول');
                      navigation.navigate('Login')
                  }else{
                      alert(res.data.msg)
                  }
              }).catch((e) => {
                console.log('====================================');
                console.log(e);
                console.log('====================================');
              })
            }else{
              alert("لا يمكن أن يحتوي الاسم على أرقام")
            }
          }else{
            alert("لا يمكن أن يحتوي الاسم على أرقام")
          }

        }else{

          alert("أدخل رقم هاتف صالحًا يبدأ بـ +9647")

        }

      }else{
        alert("يرجى إدخال البريد الإلكتروني الصحيح")
      }

    }else{
      alert('املأ جميع التفاصيل')
    }

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
            paddingVertical: 20,
          }}
        >
          تسجيل حساب جديد
        </Text>

        <TextInput
          onChangeText={(t) => setemail(t)}
          placeholder="بريد إلكتروني"
          textContentType="emailAddress"
          style={{
            borderWidth: 1,
            padding: 10,
            marginTop: 20,
            borderRadius: 3,
            borderColor: "#444",
            textAlign: 'right'
          }}
        />
        <TextInput
          onChangeText={(t) => setuname(t)}
          placeholder="اسم المستخدم"
          style={{
            borderWidth: 1,
            padding: 10,
            marginTop: 20,
            borderRadius: 3,
            borderColor: "#444",
            textAlign: 'right'
          }}
        />
        <TextInput
          onChangeText={(t) => setfname(t)}
          placeholder="الاسم الأول"
          style={{
            borderWidth: 1,
            padding: 10,
            marginTop: 20,
            borderRadius: 3,
            borderColor: "#444",
            textAlign: 'right'
          }}
        />
        <TextInput
          onChangeText={(t) => setlname(t)}
          placeholder="اسم العائلة"
          style={{
            borderWidth: 1,
            padding: 10,
            marginTop: 20,
            borderRadius: 3,
            borderColor: "#444",
            textAlign: 'right'
          }}
        />
        <TextInput
          onChangeText={(t) => setphone(t)}
          textContentType="telephoneNumber"
          placeholder="هاتف"
          style={{
            borderWidth: 1,
            padding: 10,
            marginTop: 20,
            borderRadius: 3,
            borderColor: "#444",
            textAlign: 'right'
          }}
        />
        <TextInput
          onChangeText={(t) => setaddress(t)}
          placeholder="عنوان"
          style={{
            borderWidth: 1,
            padding: 10,
            marginTop: 20,
            borderRadius: 3,
            borderColor: "#444",
            textAlign: 'right'
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
            <Picker.Item value="" label="ممول" />
            <Picker.Item value="10" label="مصرف الشرق" />
            <Picker.Item value="11" label="مصرف الأعمال" />
            <Picker.Item value="12" label="المصرف المركزي" />
            <Picker.Item value="13" label="مصرف الأموال" />
            <Picker.Item value="14" label="مصرف المشاريع" />
          </Picker>
        </View>
        <TextInput
          onChangeText={(t) => setaccount(t)}
          placeholder="رقم حساب"
          style={{
            borderWidth: 1,
            padding: 10,
            marginTop: 20,
            borderRadius: 3,
            borderColor: "#444",
            textAlign: 'right'
          }}
        />
        <TextInput
          onChangeText={(t) => setpassword(t)}
          placeholder="كلمة المرور"
          secureTextEntry
          style={{
            borderWidth: 1,
            padding: 10,
            marginTop: 20,
            borderRadius: 3,
            borderColor: "#444",
            textAlign: 'right'
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
            تسجيل حساب جديد
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
            بالفعل مستخدم؟ تسجيل الدخول
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
