import { useIsFocused } from "@react-navigation/native";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import {
  Platform,
  ScrollView,
  Text,
  View,
  StatusBar,
  Image,
  Dimensions,
  FlatList,
  TouchableOpacity,
} from "react-native";
import TopHeader from "../components/TopHeader";
import Footer from "../components/Footer";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import WebView from "react-native-webview";
import { AuthContext } from "../src/AuthProvider";

const width = Dimensions.get("window").width;

export default function ProductDetails({ navigation, route }) {
  const { pid } = route.params;

  const {cart, setCart} = useContext(AuthContext)

  const [product, setProduct] = useState(null);
  const [productI, setProductI] = useState(null);
  const [showRew, setShowRew] = useState(false);
  const [alreadyAdded, setAlreadyAdded] = useState(false);

  const isFocused = useIsFocused();

  const addToCart = () => {
    let tmp = [...cart];
    tmp.push({pid: product.product.product_id, img: productI, title: product.product.title, normal_price: product.product.normal_price, discount: product.product.discount, max_quantity: product.product.quantity, quantity: 1, sid: product.product.seller_id})
    setCart(tmp)
    navigation.navigate('Cart')
  }

  const fetchProductDetails = () => {
    axios
      .get("https://qasstly.com/api/fetch_single_product.php?pid=" + pid)
      .then((res) => {
        setProduct(res.data);
        setProductI(res.data.product.main_img);
        if(res.data.reviews.length > 0){
          setShowRew(true);
        }
        if(cart && cart.find(cart => cart.pid === res.data.product.product_id)){
          setAlreadyAdded(true)
        }
      });
  };

  useEffect(() => {
    fetchProductDetails();
  }, [isFocused]);

  if (product) {
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

        <View
          style={{
            margin: 10,
            borderWidth: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={{ uri: "https://qasstly.com/" + productI }}
            style={{ width: width - 28, height: 350 }}
          />
        </View>

        <View>
          <FlatList
            data={product.photos}
            keyExtractor={(item) => item.photo_id}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={{ padding: 10, margin: 10, borderWidth: 1.5 }}
                onPress={() => {
                  setProductI(item.photo_src);
                }}
              >
                <Image
                  source={{ uri: "https://qasstly.com/" + item.photo_src }}
                  style={{ width: 80, height: 80 }}
                />
              </TouchableOpacity>
            )}
            horizontal
          />
        </View>

        <View style={{ margin: 10 }}>
          <Text style={{ fontWeight: "700", fontSize: 24, textAlign: 'right' }}>
            {product.product.title}
          </Text>
        </View>
        <View style={{ marginHorizontal: 10 }}>
          <Text
            style={{
              fontWeight: "800",
              fontSize: 20,
              color: "#888",
              textDecorationStyle: "solid",
              textDecorationLine: "line-through",
              textDecorationColor: "#000",
              textAlign: 'right'
            }}
          >
            IQD {product.product.normal_price}
          </Text>
        </View>
        <View style={{ marginHorizontal: 10 }}>
          {product.product.dicount > 0 && (
            <Text
              style={{
                fontWeight: "800",
                fontSize: 20,
                color: "tomato",
                textAlign: 'right'
              }}
            >
              IQD {product.product.normal_price -
                (product.product.normal_price * product.product.discount) / 100}
            </Text>
          )}
          {product.product.dicount <= 0 && (
            <Text
              style={{
                fontWeight: "800",
                fontSize: 20,
                color: "tomato",
                textAlign: 'right'
              }}
            >
              IQD {product.product.normal_price}
            </Text>
          )}
        </View>

        <View style={{ display: "flex", flexWrap: "wrap", margin: 10, flexDirection: 'row-reverse' }}>
          {product.product.quantity > 0 && !alreadyAdded && (
            <TouchableOpacity
              style={{
                flexDirection: "row",
                backgroundColor: "red",
                padding: 10,
                borderRadius: 5,
              }}
              onPress={() => {
                addToCart()
              }}
            >
              <MaterialCommunityIcons name="cart" size={20} color="#fff" />
              <Text
                style={{
                  color: "#fff",
                  fontWeight: "800",
                }}
              >
                أضف إلى السلة
              </Text>
            </TouchableOpacity>
          )}
          {product.product.quantity > 0 && alreadyAdded && (
            <TouchableOpacity
              style={{
                flexDirection: "row",
                backgroundColor: "red",
                padding: 10,
                borderRadius: 5,
              }}
              onPress={() => {
                navigation.navigate('Cart')
              }}
            >
              <MaterialCommunityIcons name="cart" size={20} color="#fff" />
              <Text
                style={{
                  color: "#fff",
                  fontWeight: "800",
                }}
              >
                اذهب إلى عربة التسوق
              </Text>
            </TouchableOpacity>
          )}
          {product.product.quantity <= 0 && (
            <View
              style={{
                flexDirection: "row",
                backgroundColor: "red",
                padding: 10,
                borderRadius: 5,
              }}
            >
              <Text
                style={{
                  color: "#fff",
                  fontWeight: "800",
                }}
              >
                غير متاح
              </Text>
            </View>
          )}
        </View>
        <View style={{ borderWidth: 0.3, margin: 10 }}></View>

        <View style={{ marginHorizontal: 10 }}>
          <Text style={{ fontWeight: "600", fontSize: 18 }}>وصف</Text>
        </View>

        <View style={{ margin: 10 }}>
          {product.specs.length > 0 &&
            product.specs.map((d) => (
              <View key={d.data}>
                <View style={{ flexDirection: "row", flex: 1 }}>
                  <View style={{ borderWidth: 0.5, flex: 0.5 }}>
                    <Text style={{ textAlign: "right", padding: 10 }}>
                      {d.data}
                    </Text>
                  </View>
                  <View style={{ borderWidth: 0.5, flex: 0.5 }}>
                    <Text style={{ textAlign: "right", padding: 10 }}>
                      {d.detail_name}
                    </Text>
                  </View>
                </View>
              </View>
            ))}
          {/* <WebView
            style={{
              width: width - 20,
              height: 50,
              marginTop: 10,
            }}
            source={{ html: product.product.description }}
            minimumFontSize={40}
          /> */}
        </View>

        <View style={{ borderWidth: 0.3, margin: 10 }}></View>

        <View style={{ marginHorizontal: 10 }}>
          <Text style={{ fontWeight: "600", fontSize: 18 }}>المراجعات</Text>
        </View>

        {showRew &&
          product.reviews.map((d) => (
            <View style={{ margin: 10, borderWidth: 0.5 }} key={d.id}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  padding: 10,
                }}
              >
                <View>
                  <MaterialCommunityIcons name="account-circle" size={52} />
                </View>
                <View>
                  <Text
                    style={{
                      paddingHorizontal: 10,
                      fontSize: 18,
                      fontWeight: "800",
                    }}
                  >
                    {d.fname}
                  </Text>
                  <Text style={{ paddingHorizontal: 10, fontWeight: "600" }}>
                    {d.date}
                  </Text>
                </View>
              </View>
              <View style={{ padding: 10, borderWidth: 0.5, margin: 10 }}>
                <Text style={{ paddingHorizontal: 10 }}>{d.notes}</Text>
              </View>
            </View>
          ))}

        <View style={{ margin: 50 }}></View>
        <Footer />
      </ScrollView>
    );
  } else {
    return false;
  }
}
