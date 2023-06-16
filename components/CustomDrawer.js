import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useIsFocused } from "@react-navigation/native";
import axios from "axios";
import { AuthContext } from "../src/AuthProvider";

const CustomDrawer = (props) => {
  const isFocused = useIsFocused();

  const { user, setUser } = useContext(AuthContext);

  const [cat, setcat] = useState(null);
  const [showcat, setshowcat] = useState(false);
  const [showsubcat0, setshowsubcat0] = useState(false);
  const [showsubcat1, setshowsubcat1] = useState(false);
  const [showsubcat2, setshowsubcat2] = useState(false);
  const [showsubcat3, setshowsubcat3] = useState(false);
  const [showsubcat4, setshowsubcat4] = useState(false);
  const [showsubcat5, setshowsubcat5] = useState(false);
  const [showsubcat6, setshowsubcat6] = useState(false);
  const [showsubcat7, setshowsubcat7] = useState(false);
  const [showsubcat8, setshowsubcat8] = useState(false);
  const [showsubcat9, setshowsubcat9] = useState(false);
  const [showsubcat10, setshowsubcat10] = useState(false);

  const fetchCategories = () => {
    axios
      .get("https://qasstly.com/api/fetch_category_along_with_sub_cat.php")
      .then((res) => {
        setcat(res.data);
      });
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: "#E4B600" }}
      >
        <View
          style={{
            padding: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* <Image
            source={require("../assets/images/user-profile.jpg")}
            style={{
              height: 80,
              width: 80,
              borderRadius: 40,
              marginBottom: 10,
            }}
          /> */}
          <FontAwesome5 name="user-circle" size={42} color="#fff" />
          {user && (
            <View>
            <Text
              style={{
                color: "#fff",
                fontSize: 18,
                marginVertical: 15,
                textAlign: 'center'
              }}
            >
              {user.firstname + " " + user.lastname}
            </Text>
            <TouchableOpacity
            onPress={() => {
              props.navigation.navigate("MyProfile");
            }}
          >
            <Text
              style={{
                color: "#fff",
                fontSize: 18,
                marginVertical: 5,
                backgroundColor: "red",
                paddingHorizontal: 10,
                paddingVertical: 5,
                textAlign: 'center'
              }}
            >
              حسابي
            </Text>
          </TouchableOpacity>
          </View>
          )}
          {!user && (
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate("Login");
              }}
            >
              <Text
                style={{
                  color: "#fff",
                  fontSize: 18,
                  marginVertical: 15,
                  backgroundColor: "red",
                  paddingHorizontal: 20,
                  paddingVertical: 5,
                }}
              >
                تسجيل الدخول
              </Text>
            </TouchableOpacity>
          )}
        </View>
        <View style={{ flex: 1, backgroundColor: "#fff", paddingTop: 10 }}>
          <TouchableOpacity
            style={{
              backgroundColor: "#E4B600",
              margin: 10,
              padding: 10,
              borderRadius: 5,
              flexDirection: "row-reverse",
            }}
            onPress={() => {
              props.navigation.navigate("Dashboard");
            }}
          >
            <MaterialCommunityIcons name="home" size={22} color="#fff" />
            <Text style={{ color: "#fff", fontSize: 16, marginLeft: 5 }}>
            الرئيسية
            </Text>
          </TouchableOpacity>

          <View
            style={{
              backgroundColor: "#E4B600",
              margin: 10,
              padding: 10,
              borderRadius: 5,
            }}
          >
            <TouchableOpacity
              style={{
                flexDirection: "row-reverse",
                alignItems: "center",
                borderRadius: 5,
                justifyContent: "space-between",
              }}
              onPress={() => {
                if (showcat) {
                  setshowcat(false);
                } else {
                  setshowcat(true);
                }
              }}
            >
              <View style={{ flexDirection: "row" }}>
                
                {showcat && (
                  <MaterialCommunityIcons
                    name="chevron-down"
                    size={22}
                    color="#fff"
                  />
                )}

                {!showcat && (
                  <MaterialCommunityIcons
                    name="chevron-left"
                    size={22}
                    color="#fff"
                  />
                )}
                <Text style={{ color: "#fff", fontSize: 16, marginLeft: 5 }}>
                فئات
                </Text>

                <Ionicons name="albums-outline" size={22} color={"#fff"} style={{marginLeft: 10}} />
              </View>
            </TouchableOpacity>

            {showcat &&
              cat &&
              cat.map((item, index) => (
                <View style={{ marginTop: 10, marginLeft: 10 }}>
                  <View>
                    <TouchableOpacity
                      style={{
                        flexDirection: "row-reverse",
                        alignItems: "center",
                        borderRadius: 5,
                        justifyContent: "space-between",
                      }}
                      onPress={() => {
                        if (index == 0) {
                          if (showsubcat0) {
                            setshowsubcat0(false);
                          } else {
                            setshowsubcat0(true);
                          }
                        }
                        if (index == 1) {
                          if (showsubcat1) {
                            setshowsubcat1(false);
                          } else {
                            setshowsubcat1(true);
                          }
                        }
                        if (index == 2) {
                          if (showsubcat2) {
                            setshowsubcat2(false);
                          } else {
                            setshowsubcat2(true);
                          }
                        }
                        if (index == 3) {
                          if (showsubcat3) {
                            setshowsubcat3(false);
                          } else {
                            setshowsubcat3(true);
                          }
                        }
                        if (index == 4) {
                          if (showsubcat4) {
                            setshowsubcat4(false);
                          } else {
                            setshowsubcat4(true);
                          }
                        }

                        if (index == 5) {
                          if (showsubcat5) {
                            setshowsubcat5(false);
                          } else {
                            setshowsubcat5(true);
                          }
                        }
                        if (index == 6) {
                          if (showsubcat6) {
                            setshowsubcat6(false);
                          } else {
                            setshowsubcat6(true);
                          }
                        }
                        if (index == 7) {
                          if (showsubcat7) {
                            setshowsubcat7(false);
                          } else {
                            setshowsubcat7(true);
                          }
                        }
                        if (index == 8) {
                          if (showsubcat8) {
                            setshowsubcat8(false);
                          } else {
                            setshowsubcat8(true);
                          }
                        }
                        if (index == 9) {
                          if (showsubcat9) {
                            setshowsubcat9(false);
                          } else {
                            setshowsubcat9(true);
                          }
                        }
                        if (index == 10) {
                          if (showsubcat10) {
                            setshowsubcat10(false);
                          } else {
                            setshowsubcat10(true);
                          }
                        }
                      }}
                    >
                      <View style={{ flexDirection: "row" }}>
                        <MaterialCommunityIcons
                          name="chevron-left"
                          size={22}
                          color="#fff"
                        />

                        <Text
                          style={{ color: "#fff", fontSize: 16, marginLeft: 5 }}
                        >
                          {item.category}
                        </Text>
                        
                        <MaterialCommunityIcons
                          name="shopping-outline"
                          size={22}
                          color={"#fff"}
                          style={{marginLeft: 10}}
                        />
                      </View>
                    </TouchableOpacity>

                    {((index == 0 && showsubcat0) ||
                      (index == 1 && showsubcat1) ||
                      (index == 2 && showsubcat2) ||
                      (index == 3 && showsubcat3) ||
                      (index == 4 && showsubcat4) ||
                      (index == 5 && showsubcat5) ||
                      (index == 6 && showsubcat6) ||
                      (index == 7 && showsubcat7) ||
                      (index == 8 && showsubcat8) ||
                      (index == 9 && showsubcat9) ||
                      (index == 10 && showsubcat10)) &&
                      item.sub_cat.map((it) => (
                        <TouchableOpacity
                          style={{
                            flexDirection: "row-reverse",
                            alignItems: "center",
                            borderRadius: 5,
                            justifyContent: "space-between",
                            marginTop: 10,
                            marginLeft: 10,
                          }}
                          onPress={() => {
                            props.navigation.navigate("SubCategories", {
                              scid: it.id,
                            });
                          }}
                        >
                          <View style={{ flexDirection: "row" }}>
                            <MaterialCommunityIcons
                              name="chevron-left"
                              size={22}
                              color="#fff"
                            />
                            <Text
                              style={{
                                color: "#fff",
                                fontSize: 16,
                                marginLeft: 5,
                              }}
                            >
                              {it.sub_category}
                            </Text>
                            
                            <MaterialCommunityIcons
                              name="chess-bishop"
                              size={22}
                              color={"#fff"}
                              style={{marginLeft: 10}}
                            />
                          </View>
                        </TouchableOpacity>
                      ))}
                  </View>
                </View>
              ))}
          </View>

          <TouchableOpacity
            style={{
              backgroundColor: "#E4B600",
              margin: 10,
              padding: 10,
              borderRadius: 5,
              flexDirection: "row-reverse",
            }}
            onPress={() => {
              props.navigation.navigate("Cart");
            }}
          >
            <MaterialCommunityIcons name="cart" size={22} color="#fff" />
            <Text style={{ color: "#fff", fontSize: 16, marginLeft: 5 }}>
            عربة التسوق الخاصة بي
            </Text>
          </TouchableOpacity>

          {user && (
            <TouchableOpacity
              style={{
                backgroundColor: "#E4B600",
                margin: 10,
                padding: 10,
                borderRadius: 5,
                flexDirection: "row-reverse",
              }}
              onPress={() => {
                props.navigation.navigate("MyOrders");
              }}
            >
              <MaterialCommunityIcons name="cart-plus" size={22} color="#fff" />
              <Text style={{ color: "#fff", fontSize: 16, marginLeft: 5 }}>
              طلباتي
              </Text>
            </TouchableOpacity>
          )}

          <TouchableOpacity
            style={{
              backgroundColor: "#E4B600",
              margin: 10,
              padding: 10,
              borderRadius: 5,
              flexDirection: "row-reverse",
            }}
            onPress={() => {
              props.navigation.navigate("Financiers");
            }}
          >
            <MaterialCommunityIcons name="cash" size={22} color="#fff" />
            <Text style={{ color: "#fff", fontSize: 16, marginLeft: 5 }}>
            ممولينا
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: "#E4B600",
              margin: 10,
              padding: 10,
              borderRadius: 5,
              flexDirection: "row-reverse",
            }}
            onPress={() => {
              props.navigation.navigate("Privacy");
            }}
          >
            <MaterialCommunityIcons name="lock" size={22} color="#fff" />
            <Text style={{ color: "#fff", fontSize: 16, marginLeft: 5 }}>
            سياسة الخصوصية
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: "#E4B600",
              margin: 10,
              padding: 10,
              borderRadius: 5,
              flexDirection: "row-reverse",
            }}
            onPress={() => {
              props.navigation.navigate("Contract");
            }}
          >
            <MaterialCommunityIcons name="file" size={22} color="#fff" />
            <Text style={{ color: "#fff", fontSize: 16, marginLeft: 5 }}>
            عقد البيع
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: "#E4B600",
              margin: 10,
              padding: 10,
              borderRadius: 5,
              flexDirection: "row-reverse",
            }}
            onPress={() => {
              props.navigation.navigate("Contact");
            }}
          >
            <MaterialCommunityIcons name="globe-light" size={22} color="#fff" />
            <Text style={{ color: "#fff", fontSize: 16, marginLeft: 5 }}>
            اتصل بنا
            </Text>
          </TouchableOpacity>

          {user && (
            <TouchableOpacity
              style={{
                backgroundColor: "#E4B600",
                margin: 10,
                padding: 10,
                borderRadius: 5,
                flexDirection: "row-reverse",
              }}
              onPress={() => {
                setUser(null);
              }}
            >
              <MaterialCommunityIcons name="logout" size={22} color="#fff" />
              <Text style={{ color: "#fff", fontSize: 16, marginLeft: 5 }}>
              تسجيل خروج
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </DrawerContentScrollView>
      <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: "#ccc" }}>
        <TouchableOpacity onPress={() => {}} style={{ paddingVertical: 15, flexDirection: 'row-reverse' }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons name="share-social-outline" size={22} />
            <Text
              style={{
                fontSize: 15,
                marginLeft: 5,
              }}
            >
              اخبر صديق
            </Text>
          </View>
        </TouchableOpacity>
       
      </View>
    </View>
  );
};

export default CustomDrawer;
