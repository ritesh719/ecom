import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState, createContext, useEffect } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    if (cart.length > 0) {
      AsyncStorage.setItem('cart', JSON.stringify(cart));
    }else{
      AsyncStorage.removeItem('cart')
    }
  }, [cart]);

  useEffect(() => {
    if (user) {
      AsyncStorage.setItem('user', JSON.stringify(user));
    }else{
      AsyncStorage.removeItem('user')
    }
  }, [user]);

  useEffect(() => {
    AsyncStorage.getItem('cart').then((value) => {
      if (value) {
        setCart(JSON.parse(value));
      }
    });
  }, []);

  useEffect(() => {
    AsyncStorage.getItem('user').then((value) => {
      if (value) {
        setUser(JSON.parse(value));
      }
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        cart,
        setCart
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
