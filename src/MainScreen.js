import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import {} from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";

import HomeScreen from "../screens/home/HomeScreen";
import AccountScreen from "../screens/home/AccountScreen";
import ChatsScreen from "../screens/home/ChatsScreen";
import MyAdsScreen from "../screens/home/MyAdsScreen";
import SellScreen from "../screens/home/SellScreen";
import Colors from "../config/Colors";
import WishlistScreen from "../screens/home/WishlistScreen";

function MainScreen(props) {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        showLabel: false,
        style: {
          elevation: 0,
          backgroundColor: "#ffffff",
          height: 50,
          ...styles.shadow,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <MaterialIcons
                name="home"
                size={25}
                color={focused ? Colors.primary : "#666"}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="ChatsScreen"
        component={ChatsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <MaterialIcons
                name="question-answer"
                size={25}
                color={focused ? Colors.primary : "#666"}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="SellScreen"
        component={SellScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialIcons name="add" size={25} color="#fff" />
          ),
          tabBarButton: (props) => <CustomeTabBarButton {...props} />,
        }}
      />
      <Tab.Screen
        name="WishlistScreen"
        component={WishlistScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <MaterialIcons
                name="favorite"
                size={25}
                color={focused ? Colors.primary : "#666"}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="AccountScreen"
        component={AccountScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <MaterialIcons
                name="account-circle"
                size={25}
                color={focused ? Colors.primary : "#666"}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});

const CustomeTabBarButton = ({ children, onPress }) => (
  <TouchableOpacity
    style={{
      top: 0,
      justifyContent: "center",
      alignItems: "center",
      ...styles.shadow,
    }}
    onPress={onPress}
  >
    <View
      style={{
        width: 45,
        height: 45,
        borderRadius: 25,
        backgroundColor: Colors.primary,
      }}
    >
      {children}
    </View>
  </TouchableOpacity>
);

export default MainScreen;
