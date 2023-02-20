import React, { useContext } from "react";

import { AuthContext } from "./AuthProvider";

import { Text, View } from "react-native";

export default function AppStacks() {
  const { user } = useContext(AuthContext);

  return (
    <View>
      <Text>App</Text>
    </View>
  );
}
