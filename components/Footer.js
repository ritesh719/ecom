import React from "react";
import { Image, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Footer() {
  return (
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
        Address: Güngören-Bağcılar sanayi, İkitelli Başakşehir, Istanbul, Turkey
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
  );
}
