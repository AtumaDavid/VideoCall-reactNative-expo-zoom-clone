import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useRouter } from "expo-router";

type AppRoutes = "/MeetingRoom" | "/join" | "/schedule" | "/sharescreen";

type FontAwesomeIconName =
  | "video-camera"
  | "plus-square"
  | "calendar"
  | "upload";

interface MenuItem {
  id: number;
  name: FontAwesomeIconName;
  title: string;
  customColor?: string;
  route?: AppRoutes;
}

const items: MenuItem[] = [
  {
    id: 1,
    name: "video-camera",
    title: "New Meeting",
    customColor: "#ff751f",
    route: "/MeetingRoom",
  },
  { id: 2, name: "plus-square", title: "Join" },
  { id: 3, name: "calendar", title: "Schedule" },
  { id: 4, name: "upload", title: "Share Screen" },
];

export default function MenuButtons() {
  const router = useRouter();

  const handlePress = (route?: AppRoutes) => {
    if (route) {
      router.push(route as any);
    }
  };
  return (
    <View style={styles.container}>
      {items.map((item, index) => (
        <View key={item.id} style={styles.buttonContainer}>
          <TouchableOpacity
            style={{
              ...styles.button,
              backgroundColor: item.customColor ? item.customColor : "#0470dc",
            }}
            onPress={() => handlePress(item.route)}
          >
            <FontAwesome name={item.name} size={24} color="#efefef" />
          </TouchableOpacity>
          <Text style={styles.menuText}>{item.title}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    paddingBottom: 10,
    borderBottomColor: "#1f1f1f",
    borderBottomWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonContainer: {
    alignItems: "center",
    flex: 1,
  },
  menuText: {
    color: "#858585",
    fontSize: 12,
    paddingTop: 10,
    fontWeight: "600",
  },
  button: {
    width: 50,
    height: 50,
    // backgroundColor: "blue",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
});
