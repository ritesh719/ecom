import { useIsFocused } from "@react-navigation/native";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Platform, ScrollView, StatusBar, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import ProductCard from "../components/ProductCard";
import TopHeader from "../components/TopHeader";

export default function ProductList({ navigation, route }) {
  const { nd_id } = route.params;

  const isFocused = useIsFocused();

  const [product, setproduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchProducts = () => {
    axios
      .get("https://qasstly.com/api/fetch_product_by_nd.php?nd=" + nd_id)
      .then((res) => {
        setproduct(res.data);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchProducts();
  }, [isFocused]);

  if (isLoading) {
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

      <View style={{ margin: 10, borderBottomWidth: 0.5, padding: 10 }}>
        <Text style={{ fontWeight: "900", fontSize: 22, textAlign: "center" }}>
          Products
        </Text>
      </View>
      {product.length > 0 && (
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

      {product.length <= 0 && (
        <TouchableOpacity
          style={{
            backgroundColor: "tomato",
            paddingHorizontal: 20,
            paddingVertical: 10,
            margin: 10,
          }}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontWeight: "900",
              textAlign: "center",
              fontSize: 18,
            }}
          >
            Go Back
          </Text>
        </TouchableOpacity>
      )}
    </ScrollView>
  );
}
