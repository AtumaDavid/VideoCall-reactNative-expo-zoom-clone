import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

export default function MeetingRoom() {
  const [name, setName] = useState<string>("");
  const [roomId, setRoomId] = useState<string>("");

  return (
    <View style={styles.container}>
      <View style={styles.startMeetingContainer}>
        <View style={styles.info}>
          <TextInput
            placeholder="Enter name"
            placeholderTextColor="#767476"
            style={styles.textInput}
            value={name}
            onChangeText={(text) => setName(text)}
          />
        </View>
        <View style={styles.info}>
          <TextInput
            placeholder="Enter Room Id"
            placeholderTextColor="#767476"
            style={styles.textInput}
            value={roomId}
            onChangeText={(text) => setRoomId(text)}
          />
        </View>
      </View>
      <View style={{ alignItems: "center" }}>
        <TouchableOpacity style={styles.startMeetingButton} onPress={() => {}}>
          <Text style={styles.startMeetingText}>Start Meeting</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1c1c1c",
  },
  startMeetingContainer: {},
  info: {
    width: "100%",
    backgroundColor: "#373538",
    height: 50,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#484648",
    padding: 3,
    justifyContent: "center",
  },
  textInput: {
    color: "#ffffff",
    fontSize: 18,
  },
  startMeetingButton: {
    width: 350,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0470dc",
    height: 50,
    borderRadius: 15,
  },
  startMeetingText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
