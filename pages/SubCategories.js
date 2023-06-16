import { useIsFocused } from "@react-navigation/native";
import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Platform,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import ProductCard from "../components/ProductCard";
import TopHeader from "../components/TopHeader";

export default function SubCategories({ navigation, route }) {
  const { scid } = route.params;

  const isFocused = useIsFocused();

  const [categories, setCategories] = useState(null);

  useEffect(() => {
    fetchCategories();
  }, [isFocused, scid]);

  const fetchCategories = () => {
    axios
      .get("https://qasstly.com/api/nd_sub_category.php?scid=" + scid)
      .then((res) => {
        setCategories(res.data);
        console.log(res.data);
      });
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

      <View style={{ margin: 10, borderBottomWidth: 0.5, padding: 10 }}>
        <Text style={{ fontWeight: "900", fontSize: 22, textAlign: "center" }}>
        الفئات الفرعية
        </Text>
      </View>

      <View
        style={{ marginBottom: 50, flexDirection: "row", flexWrap: "wrap" }}
      >
        {categories && categories.length > 0 &&
          categories.map((item) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("ProductList", { nd_id: item.id });
              }}
            >
              <ProductCard
                img={"https://qasstly.com/" + item.nd_sub_cat_img}
                title={item.nd_sub_cat}
                k={item.id}
              />
            </TouchableOpacity>
          ))}

          {!categories || categories.length < 1 && (
            <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
              <Text style={{textAlign: 'center'}}>لا توجد منتجات في هذه الفئة</Text>
              <TouchableOpacity style={{margin: 20, padding: 10, backgroundColor: 'red'}} onPress={() => {navigation.navigate('Dashboard')}}>
                <Text style={{color: '#fff', fontWeight: '600'}}>اذهب إلى الصفحة الرئيسية</Text>
              </TouchableOpacity>
            </View>
          )}
      </View>
    </ScrollView>
  );
}
