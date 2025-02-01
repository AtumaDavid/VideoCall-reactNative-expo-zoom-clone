import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";

const contactsMenuButtons = [
  {
    type: "starred",
    name: "Starred",
  },
  {
    type: "contact",
    name: "Jessy",
    photo: require("../assets/images/R.jpeg"),
  },
  {
    type: "contact",
    name: "Nazari",
    photo: require("../assets/images/R (1).jpeg"),
  },
  {
    type: "contact",
    name: "Rafael",
    photo: require("../assets/images/R (2).jpeg"),
  },
];

export default function ContactMenu() {
  return (
    <View style={styles.container}>
      {contactsMenuButtons.map((contact, index) => (
        <View style={styles.row} key={index}>
          {contact.type == "starred" ? (
            <View style={styles.starredIcon}>
              <AntDesign name="star" size={24} color="#efefef" />
            </View>
          ) : (
            <Image source={contact.photo} style={styles.image} />
          )}

          <Text style={styles.text}>{contact.name}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  text: {
    color: "white",
    paddingLeft: 15,
    fontSize: 18,
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
    marginTop: 20,
    alignItems: "center",
  },
  starredIcon: {
    backgroundColor: "#333333",
    width: 55,
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  image: {
    backgroundColor: "#333333",
    width: 55,
    height: 55,
    objectFit: "cover",
    // justifyContent: "center",
    // alignItems: "center",
    borderRadius: 20,
  },
});
