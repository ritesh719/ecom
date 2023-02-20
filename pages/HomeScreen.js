import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import {
  Dimensions,
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  View,
} from "react-native";
import Carousel from "react-native-reanimated-carousel";
import TopHeader from "../components/TopHeader";

const slider = [
  { id: 1, img: "https://qasstly.com/images/slider/slider-img1.jpg" },
  { id: 2, img: "https://qasstly.com/images/slider/slider-img2.jpg" },
  { id: 3, img: "https://qasstly.com/images/slider/slider-img3.jpg" },
];

export default function HomeScreen({ navigation }) {
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
        <View style={{ width: width / 2, padding: 10 }}>
          <View style={{ borderWidth: 1, padding: 5 }}>
            <Image
              source={{
                uri: "https://qasstly.com/products_img/product_607d3abc9c75f.jpg",
              }}
              style={{ width: width / 2 - 32, height: 200 }}
            />
            <Text
              numberOfLines={2}
              style={{ fontWeight: "bold", fontSize: 16 }}
            >
              Acer Aspire 3 A315-23 AMD Ryzen 5 3500U 8GB 256GB SSD Linux 15.6
            </Text>
            <Text
              style={{
                textDecorationStyle: "solid",
                textDecorationLine: "line-through",
                fontWeight: "bold",
                color: "#888",
              }}
            >
              1129
            </Text>
            <Text style={{ color: "tomato", fontWeight: "900", fontSize: 20 }}>
              989
            </Text>
          </View>
        </View>
        <View style={{ width: width / 2, padding: 10 }}>
          <View style={{ borderWidth: 1, padding: 5 }}>
            <Image
              source={{
                uri: "https://qasstly.com/products_img/product_607d3abc9c75f.jpg",
              }}
              style={{ width: width / 2 - 32, height: 200 }}
            />
            <Text
              numberOfLines={2}
              style={{ fontWeight: "bold", fontSize: 16 }}
            >
              Acer Aspire 3 A315-23 AMD Ryzen 5 3500U 8GB 256GB SSD Linux 15.6
            </Text>
            <Text
              style={{
                textDecorationStyle: "solid",
                textDecorationLine: "line-through",
                fontWeight: "bold",
                color: "#888",
              }}
            >
              1129
            </Text>
            <Text style={{ color: "tomato", fontWeight: "900", fontSize: 20 }}>
              989
            </Text>
          </View>
        </View>
        <View style={{ width: width / 2, padding: 10 }}>
          <View style={{ borderWidth: 1, padding: 5 }}>
            <Image
              source={{
                uri: "https://qasstly.com/products_img/product_607d3abc9c75f.jpg",
              }}
              style={{ width: width / 2 - 32, height: 200 }}
            />
            <Text
              numberOfLines={2}
              style={{ fontWeight: "bold", fontSize: 16 }}
            >
              Acer Aspire 3 A315-23 AMD Ryzen 5 3500U 8GB 256GB SSD Linux 15.6
            </Text>
            <Text
              style={{
                textDecorationStyle: "solid",
                textDecorationLine: "line-through",
                fontWeight: "bold",
                color: "#888",
              }}
            >
              1129
            </Text>
            <Text style={{ color: "tomato", fontWeight: "900", fontSize: 20 }}>
              989
            </Text>
          </View>
        </View>
        <View style={{ width: width / 2, padding: 10 }}>
          <View style={{ borderWidth: 1, padding: 5 }}>
            <Image
              source={{
                uri: "https://qasstly.com/products_img/product_607d3abc9c75f.jpg",
              }}
              style={{ width: width / 2 - 32, height: 200 }}
            />
            <Text
              numberOfLines={2}
              style={{ fontWeight: "bold", fontSize: 16 }}
            >
              Acer Aspire 3 A315-23 AMD Ryzen 5 3500U 8GB 256GB SSD Linux 15.6
            </Text>
            <Text
              style={{
                textDecorationStyle: "solid",
                textDecorationLine: "line-through",
                fontWeight: "bold",
                color: "#888",
              }}
            >
              1129
            </Text>
            <Text style={{ color: "tomato", fontWeight: "900", fontSize: 20 }}>
              989
            </Text>
          </View>
        </View>
        <View style={{ width: width / 2, padding: 10 }}>
          <View style={{ borderWidth: 1, padding: 5 }}>
            <Image
              source={{
                uri: "https://qasstly.com/products_img/product_607d3abc9c75f.jpg",
              }}
              style={{ width: width / 2 - 32, height: 200 }}
            />
            <Text
              numberOfLines={2}
              style={{ fontWeight: "bold", fontSize: 16 }}
            >
              Acer Aspire 3 A315-23 AMD Ryzen 5 3500U 8GB 256GB SSD Linux 15.6
            </Text>
            <Text
              style={{
                textDecorationStyle: "solid",
                textDecorationLine: "line-through",
                fontWeight: "bold",
                color: "#888",
              }}
            >
              1129
            </Text>
            <Text style={{ color: "tomato", fontWeight: "900", fontSize: 20 }}>
              989
            </Text>
          </View>
        </View>
      </View>

      <View
        style={{
          marginBottom: 50,
          padding: 20,
          backgroundColor: "#eee",
        }}
      >
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Image
            source={{ uri: "https://qasstly.com/images/logo.png" }}
            style={{ width: 159, height: 52, marginBottom: 20 }}
          />
        </View>
        <Text
          style={{ fontWeight: "900", marginVertical: 3, textAlign: "center" }}
        >
          Address: Güngören-Bağcılar sanayi, İkitelli Başakşehir, Istanbul,
          Turkey
        </Text>
        <Text
          style={{ fontWeight: "900", marginVertical: 3, textAlign: "center" }}
        >
          Email: Support@themes.com
        </Text>
        <Text
          style={{ fontWeight: "900", marginVertical: 3, textAlign: "center" }}
        >
          Phone: +1 (800) 456 456 0123
        </Text>

        <View
          style={{
            justifyContent: "center",
            flexDirection: "row",
            marginTop: 10,
          }}
        >
          <MaterialCommunityIcons name="facebook" size={24} />
          <MaterialCommunityIcons name="twitter" size={24} />
          <MaterialCommunityIcons name="google" size={24} />
          <MaterialCommunityIcons name="instagram" size={24} />
        </View>
      </View>
    </ScrollView>
  );
}
