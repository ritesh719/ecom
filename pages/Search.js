import React, { useState } from 'react'
import { Platform, ScrollView, StatusBar, Text, TextInput, TouchableOpacity, View } from 'react-native'
import TopHeader from '../components/TopHeader'
import { MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";
import axios from 'axios';
import ProductCard from '../components/ProductCard';

export default function Search({navigation}) {

  const [product, setproduct] = useState(null)

  const [searched, setSearched] = useState(false)

  const [searchTerm, setSearchTerm] = useState()

  const searchProduct = () => {
    axios.get('https://qasstly.com/api/search.php?s='+searchTerm).then((res) => {
        setproduct(res.data)
        setSearched(true)
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
      
      <View style={{flexDirection: 'row', flex: 1, padding: 10}}>
        <TextInput placeholder='البحث عن المنتجات...' style={{borderWidth: 1, padding: 5, flex: 0.9}} onChangeText={(d) => setSearchTerm(d)} />
        <TouchableOpacity onPress={() => {searchProduct()}} style={{flex: 0.1, alignItems: 'center', justifyContent: 'center'}}>
          <FontAwesome5 name="search" size={20} />
        </TouchableOpacity>
      </View>

      {product && product.length > 0 && (
        <View
          style={{ marginBottom: 50, flexDirection: "row", flexWrap: "wrap" }}
        >
          {product.map((item) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("ProductDetails", { pid: item.product_id });
              }}
            >
              <ProductCard
                img={"https://qasstly.com/" + item.main_img}
                title={item.title}
                dprice={item.normal_price}
                price={item.normal_price - item.discount}
                k={item.product_id}
              />
            </TouchableOpacity>
          ))}
        </View>
      )}

      {(!product || product.length < 1) && searched && (
        <View style={{padding: 20}}>
          <Text style={{textAlign: 'center'}}>لا توجد منتجات</Text>
        </View>
      ) }


    </ScrollView>
  )
}
