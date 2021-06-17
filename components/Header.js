import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Header({ title }) {
  return <View style={styles.header}></View>;
}

const styles = StyleSheet.create({
  header: {
    height: 32,
    backgroundColor: '#0b01c4',
  },
});
