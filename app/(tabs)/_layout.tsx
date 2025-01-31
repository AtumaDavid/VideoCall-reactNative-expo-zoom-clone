import ContactMenu from "@/components/ContactMenu";
import Header from "@/components/Header";
import MenuButtons from "@/components/MenuButtons";
import SearchBar from "@/components/SearchBar";
import React from "react";
// import FontAwesome from "@expo/vector-icons/FontAwesome";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
// function TabBarIcon(props: {
//   name: React.ComponentProps<typeof FontAwesome>["name"];
//   color: string;
// }) {
//   return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
// }

export default function TabLayout() {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Header />
        <SearchBar />
        <MenuButtons />
        <ContactMenu />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1c1c1c",
    padding: 15,
  },
});
