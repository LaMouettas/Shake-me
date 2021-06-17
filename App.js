import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Pressable,
  ScrollView,
} from "react-native";

import { Home } from "./pages/Home";

import Header from "./components/Header";

export default function App() {
  const [page, navigate] = useState("Home");

  function showProduct(pressedItem) {
    setCurrentProduct(pressedItem);
    navigate("Product");
  }

  /* Fonction Appel API */

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      {/* Header */}
      <Header />

      {/* TODO: Ajouter navigation */}
      {page === "Home" && <Home />}
    </SafeAreaView>
  );
}
/* Ajout d'une  constante pour le style global */
const styles = StyleSheet.create({});
