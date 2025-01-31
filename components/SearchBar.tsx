import { View, Text, StyleSheet } from "react-native";
import React from "react";
import EvilIcons from "@expo/vector-icons/EvilIcons";

export default function SearchBar() {
  return (
    <View style={styles.container}>
      <EvilIcons name="search" size={24} color="#858585" />
      <Text style={styles.textSearchBar}>Search</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#3333",
    flexDirection: "row",
    paddingHorizontal: 10,
    height: 40,
    alignItems: "center",
    borderRadius: 10,
  },
  textSearchBar: {
    color: "#858585",
    paddingLeft: 10,
    fontSize: 20,
  },
});
