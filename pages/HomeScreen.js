import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useIsFocused } from "@react-navigation/native";
import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Dimensions,
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Carousel from "react-native-reanimated-carousel";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import TopHeader from "../components/TopHeader";

const slider = [
  { id: 1, img: "https://qasstly.com/images/slider/slider-img1.jpg" },
  { id: 2, img: "https://qasstly.com/images/slider/slider-img2.jpg" },
  { id: 3, img: "https://qasstly.com/images/slider/slider-img3.jpg" },
];

export default function HomeScreen({ navigation }) {
  const [pp, setpp] = useState(null);

  const isFocused = useIsFocused();

  const fetch_pp = () => {
    axios
      .get("https://qasstly.com/api/fetch_top_selling_products.php")
      .then((res) => {
        setpp(res.data);
      });
  };

  useEffect(() => {
    fetch_pp();
  }, [isFocused]);

  const sliderWrapper = ({ item }) => {
    return (
      <View>
        <Image source={{ uri: item.img }} style={{ width: 100, height: 50 }} />
      </View>
    );
  };

  const width = Dimensions.get("window").width;

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: "#fff",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <TopHeader navigation={navigation} />
      <View>
        <Carousel
          loop
          width={width}
          height={width / 2.5}
          autoPlay={true}
          data={slider}
          scrollAnimationDuration={2000}
          renderItem={({ item }) => (
            <View
              style={{
                flex: 1,
                borderWidth: 1,
                justifyContent: "center",
              }}
            >
              <Image
                source={{
                  uri: item.img,
                }}
                style={{ width: width, height: width / 2.5 }}
              />
            </View>
          )}
        />
      </View>

      <View style={{ padding: 10 }}>
        <Image
          source={{ uri: "https://qasstly.com/images/top-banner4.jpg" }}
          style={{ width: width - 20, height: width / 2.5, marginTop: 10 }}
        />
      </View>

      <View style={{ flexDirection: "row" }}>
        <View style={{ padding: 10 }}>
          <View style={{ borderWidth: 1 }}>
            <Image
              source={{ uri: "https://qasstly.com/images/top-banner3.jpg" }}
              style={{
                width: width / 2 - 20,
                height: width / 2.5,
              }}
            />
          </View>
        </View>
        <View style={{ padding: 10 }}>
          <View style={{ borderWidth: 1 }}>
            <Image
              source={{ uri: "https://qasstly.com/images/top-banner2.jpg" }}
              style={{ width: width / 2 - 20, height: width / 2.5 }}
            />
          </View>
        </View>
      </View>

      <View style={{ padding: 10 }}>
        <View
          style={{
            borderBottomWidth: 3,
            width: "50%",
            borderBottomColor: "tomato",
            paddingBottom: 8,
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 24 }}>New Products</Text>
        </View>
      </View>

      {/* {DATA.map((book, index) => {
        return (
          <Text style={styles.scrollText} key={book.id}>
            {book.title}
          </Text>
        );
      })} */}

      <View
        style={{ marginBottom: 50, flexDirection: "row", flexWrap: "wrap" }}
      >
        {pp &&
          pp.map((item) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("ProductDetails", { pid: item.product_id });
              }}
              key={item.product_id}
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

      <Footer />
    </ScrollView>
  );
}
