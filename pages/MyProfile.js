import { useIsFocused } from '@react-navigation/native'
import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Platform, ScrollView, StatusBar, Text, TextInput, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import TopHeader from '../components/TopHeader'
import { AuthContext } from '../src/AuthProvider'

export default function MyProfile({navigation}) {

    const isFocused = useIsFocused()

    const [firstname, setfirstname] = useState(null)
    const [address, setaddress] = useState(null)
    const [email, setemail] = useState(null)
    const [lastname, setlastname] = useState(null)
    const [phone, setphone] = useState(null)
    const [password, setpassword] = useState('')

    const {user, setUser} = useContext(AuthContext)

    const updateUser = () => {
        axios.post("https://qasstly.com/api/updateUser.php", {uid: user.id, fname: firstname, lname: lastname, email: email, mobile: phone, address: address, password: password}).then((res) => {
            setUser(res.data.resp.data)
            alert("تم تحديث الملف الشخصي بنجاح")
        })
    }

    useEffect(() => {
      setfirstname(user.firstname)
      setaddress(user.address)
      setemail(user.email)
      setlastname(user.lastname)
      setphone(user.phone)
    }, [])
    

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: "#fff",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <TopHeader navigation={navigation} />

      <View style={{margin: 10,}}>
        <Text style={{fontSize: 23, fontWeight: 'bold'}}>المعلومات الشخصية</Text>
      </View>

      <View>
        <TextInput value={user.username} editable={false} style={{borderWidth: 1, padding: 5, margin: 10, textAlign: 'right'}} />
        <TextInput value={email} style={{borderWidth: 1, padding: 5, margin: 10, textAlign: 'right'}}  onChangeText={(d) => setemail(d)}  />
        <TextInput value={firstname} style={{borderWidth: 1, padding: 5, margin: 10, textAlign: 'right'}} onChangeText={(d) => setfirstname(d)} />
        <TextInput value={lastname} style={{borderWidth: 1, padding: 5, margin: 10, textAlign: 'right'}} onChangeText={(d) => setlastname(d)}  />
        <TextInput value={user.financier} editable={false} style={{borderWidth: 1, padding: 5, margin: 10, textAlign: 'right'}}  />
        <TextInput value={user.bank_acc_no} editable={false} style={{borderWidth: 1, padding: 5, margin: 10, textAlign: 'right'}}  />
        <TextInput value={phone} style={{borderWidth: 1, padding: 5, margin: 10, textAlign: 'right'}} onChangeText={(d) => setphone(d)}  />
        <TextInput value={address} style={{borderWidth: 1, padding: 5, margin: 10, textAlign: 'right'}} onChangeText={(d) => setaddress(d)}  />
        <TextInput placeholder='تغيير كلمة المرور' style={{borderWidth: 1, padding: 5, margin: 10, textAlign: 'right'}} onChangeText={(d) => setpassword(d)}  />
      </View>

      <TouchableOpacity style={{margin: 10, backgroundColor: '#fbd84a', padding: 15}} onPress={() => updateUser()}>
        <Text>تحديث المعلومات</Text>
      </TouchableOpacity>
      
    </ScrollView>
  )
}
