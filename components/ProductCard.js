import React from "react";
import { Dimensions, Image, Text, View } from "react-native";

const width = Dimensions.get("window").width;

export default function ProductCard({ img, title, dprice, price, k }) {
  return (
    <View key={k} style={{ width: width / 2, padding: 10 }}>
      <View style={{ borderWidth: 1, padding: 5 }}>
        <Image
          source={{
            uri: img,
          }}
          style={{ width: width / 2 - 32, height: 200 }}
        />
        <Text numberOfLines={2} style={{ fontWeight: "bold", fontSize: 16, textAlign: 'right' }}>
          {title}
        </Text>
        {dprice && (
          <Text
            style={{
              textDecorationStyle: "solid",
              textDecorationLine: "line-through",
              fontWeight: "bold",
              color: "#888",
              textAlign: 'right'
            }}
          >
            {dprice}
          </Text>
        )}
        {price && (
          <Text style={{ color: "tomato", fontWeight: "900", fontSize: 20, textAlign: 'right' }}>
            IQD {price}
          </Text>
        )}
      </View>
    </View>
  );
}
