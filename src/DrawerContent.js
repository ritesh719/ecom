import React, { useState, useContext } from "react";
import { View, StyleSheet } from "react-native";
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from "react-native-paper";

import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "../config/Colors";
import { AuthContext } from "./AuthProvider";

export function DrawerContent(props) {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const { user } = useContext(AuthContext);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  marginTop: 15,
                  paddingVertical: 10,
                }}
              >
                <Avatar.Image source={{ uri: "https://picsum.photos/50/50" }} />
              </View>
              <View style={{ flexDirection: "column", marginLeft: 15 }}>
                <Title style={styles.title}>{user.name}</Title>
                <Caption style={styles.caption}>+91 {user.mobile}</Caption>
              </View>
            </View>
          </View>

          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({ color, size }) => (
                <MaterialCommunityIcons
                  name="message-bulleted"
                  color={color}
                  size={size}
                />
              )}
              label="Help Center"
              onPress={() => {
                props.navigation.navigate("Home");
              }}
              style={[
                styles.drawerItem,
                { marginTop: 10, marginBottom: 10, borderBottomWidth: 0 },
              ]}
              labelStyle={{ fontWeight: "bold" }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <MaterialCommunityIcons name="home" color={color} size={size} />
              )}
              label="Home"
              onPress={() => {
                props.navigation.navigate("Home");
              }}
              style={[
                styles.drawerItem,
                { borderTopColor: "#ddd", borderTopWidth: 1 },
              ]}
              labelStyle={{ fontWeight: "bold" }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <MaterialCommunityIcons
                  name="heart"
                  color={color}
                  size={size}
                />
              )}
              label="My Wishlist"
              onPress={() => {
                props.navigation.navigate("WishlistScreen");
              }}
              style={[
                styles.drawerItem,
                { borderTopColor: "#ddd", borderTopWidth: 1 },
              ]}
              labelStyle={{ fontWeight: "bold" }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <MaterialCommunityIcons name="cart" color={color} size={size} />
              )}
              label="My Cart"
              onPress={() => {
                props.navigation.navigate("CartScreen");
              }}
              style={[
                styles.drawerItem,
                { borderTopColor: "#ddd", borderTopWidth: 1 },
              ]}
              labelStyle={{ fontWeight: "bold" }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <MaterialCommunityIcons
                  name="handshake"
                  color={color}
                  size={size}
                />
              )}
              label="Register as merchant"
              onPress={() => {
                props.navigation.navigate("WishlistScreen");
              }}
              style={styles.drawerItem}
              labelStyle={{ fontWeight: "bold" }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <MaterialCommunityIcons
                  name="information"
                  color={color}
                  size={size}
                />
              )}
              label="About the company"
              onPress={() => {
                props.navigation.navigate("SettingsScreen");
              }}
              style={styles.drawerItem}
              labelStyle={{ fontWeight: "bold" }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <MaterialCommunityIcons
                  name="share"
                  color={color}
                  size={size}
                />
              )}
              label="Share "
              onPress={() => {
                props.navigation.navigate("SupportScreen");
              }}
              style={styles.drawerItem}
              labelStyle={{ fontWeight: "bold" }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <MaterialCommunityIcons name="tag" color={color} size={size} />
              )}
              label="Refer and Earn "
              onPress={() => {
                props.navigation.navigate("SupportScreen");
              }}
              style={styles.drawerItem}
              labelStyle={{ fontWeight: "bold" }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <MaterialCommunityIcons name="gift" color={color} size={size} />
              )}
              label="My Gift Cards "
              onPress={() => {
                props.navigation.navigate("SupportScreen");
              }}
              style={styles.drawerItem}
              labelStyle={{ fontWeight: "bold" }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <MaterialCommunityIcons
                  name="wallet"
                  color={color}
                  size={size}
                />
              )}
              label="My Wallet "
              onPress={() => {
                props.navigation.navigate("SupportScreen");
              }}
              style={styles.drawerItem}
              labelStyle={{ fontWeight: "bold" }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <MaterialCommunityIcons
                  name="clock"
                  color={color}
                  size={size}
                />
              )}
              label="Schedule "
              onPress={() => {
                props.navigation.navigate("SupportScreen");
              }}
              style={styles.drawerItem}
              labelStyle={{ fontWeight: "bold" }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <MaterialCommunityIcons name="star" color={color} size={size} />
              )}
              label="Rate this app "
              onPress={() => {
                props.navigation.navigate("SupportScreen");
              }}
              style={styles.drawerItem}
              labelStyle={{ fontWeight: "bold" }}
            />
          </Drawer.Section>
          <Drawer.Section title="Preferences">
            <TouchableRipple
              onPress={() => {
                toggleTheme();
              }}
            >
              <View style={styles.preference}>
                <Text>Dark Theme</Text>
                <View pointerEvents="none">
                  <Switch value={isDarkTheme} />
                </View>
              </View>
            </TouchableRipple>
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({ color, size }) => (
            <MaterialCommunityIcons
              name="exit-to-app"
              color={color}
              size={size}
            />
          )}
          label="Sign Out"
          onPress={() => {}}
        />
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    top: -5,
    color: "#eeeeee",
  },
  userInfoSection: {
    paddingLeft: 20,
    backgroundColor: Colors.primary,
    color: "#eeeeee",
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: "bold",
    color: "#eeeeee",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    color: "#eeeeee",
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 3,
    color: "#eeeeee",
  },
  drawerSection: {
    marginTop: 0,
    backgroundColor: "#eee",
  },
  bottomDrawerSection: {
    marginBottom: 0,
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  drawerItem: {
    marginBottom: 0,
    marginHorizontal: 0,
    borderRadius: 0,
    marginTop: 0,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    backgroundColor: "#fff",
  },
});
