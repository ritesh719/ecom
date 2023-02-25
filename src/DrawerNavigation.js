import React from "react";
import { Text, View } from "react-native";

import { createDrawerNavigator } from "@react-navigation/drawer";
import LoginScreen from "../pages/LoginScreen";
import CustomDrawer from "../components/CustomDrawer";

import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "../pages/HomeScreen";
import { createStackNavigator } from "@react-navigation/stack";
import ProductList from "../pages/ProductList";
import SubCategories from "../pages/SubCategories";
import ProductDetails from "../pages/ProductDetails";
import Cart from "../pages/Cart";
import Login from "../pages/Login";
import Register from "../pages/Register";
import CheckoutScreen from "../pages/CheckoutScreen";
import MyOrders from "../pages/MyOrders";
import Financiers from "../pages/Financiers";
import Contract from "../pages/Contract";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import ContactUs from "../pages/ContactUs";

const Drawer = createDrawerNavigator();

const Stack = createStackNavigator();

function StackFirst() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Dashboard" component={HomeScreen} />
      <Stack.Screen name="ProductList" component={ProductList} />
      <Stack.Screen name="SubCategories" component={SubCategories} />
      <Stack.Screen name="ProductDetails" component={ProductDetails} />
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Checkout" component={CheckoutScreen} />
      <Stack.Screen name="MyOrders" component={MyOrders} />
      <Stack.Screen name="Financiers" component={Financiers} />
      <Stack.Screen name="Contract" component={Contract} />
      <Stack.Screen name="Privacy" component={PrivacyPolicy} />
      <Stack.Screen name="Contact" component={ContactUs} />
    </Stack.Navigator>
  );
}

export default function DrawerNavigation() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        drawerActiveBackgroundColor: "#aa18ea",
        drawerActiveTintColor: "#fff",
        drawerInactiveTintColor: "#333",
        drawerLabelStyle: {
          marginLeft: -25,
          fontSize: 15,
        },
        headerShown: false,
      }}
    >
      <Drawer.Screen
        name="Home"
        component={StackFirst}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="home-outline" size={22} color={color} />
          ),
        }}
      />

    </Drawer.Navigator>
  );
}
