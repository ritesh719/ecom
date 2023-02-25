import { useIsFocused } from '@react-navigation/native'
import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Image, Platform, ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import TopHeader from '../components/TopHeader'
import { AuthContext } from '../src/AuthProvider'

export default function MyOrders({navigation}) {

    const {user} = useContext(AuthContext)

    const [orders, setorders] = useState(null)

    const isFocused = useIsFocused()

    useEffect(() => {
      axios.get("https://qasstly.com/api/user_orders.php?uid="+user.id).then((res) => {
        console.log('====================================');
        console.log(res.data);
        setorders(res.data)
        console.log('====================================');
      })
    }, [isFocused])
    
    if(!user){
        return false;
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
          MY ORDERS
        </Text>
      </View>

      {orders &&
        orders.map((c) => (
          <View style={{ borderWidth: 1, margin: 10 }}>
            <View style={{ flexDirection: "row", flex: 1 }}>
              <View style={{ flex: 0.2, padding: 10 }}>
                <Image
                  source={{
                    uri: "https://qasstly.com/" + c.main_img,
                  }}
                  style={{ width: 80, height: 80 }}
                />
              </View>
              <View style={{ flex: 0.8, padding: 10 }}>
                <Text style={{ paddingHorizontal: 10 }}>Order ID: {c.order_id}</Text>
                <Text style={{ paddingHorizontal: 10 }}>{c.title}</Text>
                <Text style={{ paddingHorizontal: 10 }}>{c.date}</Text>
                <Text style={{ paddingHorizontal: 10, fontWeight: '800' }}>{c.p_status}</Text>
              </View>
            </View>
            <View style={{ flexDirection: "row", flex: 1 }}>
              <View style={{ flex: 0.2, padding: 10 }}>
                <Text style={{ fontSize: 16, fontWeight: "600" }}>Price</Text>
              </View>
              <View style={{ flex: 0.8, padding: 10 }}>
                  <Text
                    style={{
                      paddingHorizontal: 10,
                      fontSize: 16,
                      fontWeight: "600",
                      textAlign: "right",
                    }}
                  >
                    {c.price}
                  </Text>
              </View>
            </View>
            
          </View>
        ))}

    </ScrollView>
  )
}
