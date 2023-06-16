import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState, useEffect, useContext } from "react";
import { SafeAreaView, View, ActivityIndicator, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { AuthContext } from "./AuthProvider";
import * as SecureStore from "expo-secure-store";
import { createStackNavigator } from "@react-navigation/stack";
import AppStacks from "./AppStacks";
import DrawerNavigation from "./DrawerNavigation";

const Stack = createStackNavigator();

const Routes = () => {
  const { user, setUser } = useContext(AuthContext);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AsyncStorage.getItem('user').then((value) => {
      if (value) {
        setUser(JSON.parse(value));
      }
      setLoading(false)
    });
  }, []);

  if (loading) {
    return (
      <SafeAreaView>
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Text>Loading</Text>
        </View>
      </SafeAreaView>
    );
  }

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <DrawerNavigation />
    </NavigationContainer>
  );
};

export default Routes;
