import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function TopHeader({ navigation }) {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <TouchableOpacity
        onPress={() => navigation.openDrawer()}
        style={{ padding: 10 }}
      >
        <MaterialCommunityIcons name="menu" size={28} />
      </TouchableOpacity>
      <View style={{ padding: 5 }}>
        <Image
          source={{ uri: "https://qasstly.com/images/logo.png" }}
          style={{ width: 159, height: 52 }}
        />
      </View>
      <View style={{ flexDirection: "row", padding: 10 }}>
        <MaterialCommunityIcons name="home-search" size={28} />
        <MaterialCommunityIcons name="cart" size={28} />
      </View>
    </View>
  );
}
