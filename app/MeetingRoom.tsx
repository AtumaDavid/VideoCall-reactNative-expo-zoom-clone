import {
  View,
  StyleSheet,
  Platform,
  Text,
  Alert,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import StartMeeting from "@/components/StartMeeting";
import { io, Socket } from "socket.io-client";
import { Camera, CameraView } from "expo-camera";
import FontAwesome from "@expo/vector-icons/FontAwesome";

type MenuIcon = {
  id: number;
  name: any;
  title: string;
  customColor?: string;
};

const menuIcons: MenuIcon[] = [
  {
    id: 1,
    name: "microphone",
    title: "Mute",
    customColor: "#efefef",
  },
  {
    id: 2,
    name: "video-camera",
    title: "Stop Video",
    // customColor:"#efefef"
  },
  {
    id: 3,
    name: "upload",
    title: "Share Content",
    // customColor:"#efefef"
  },
  {
    id: 4,
    name: "group",
    title: "Participants",
    // customColor:"#efefef"
  },
];

export default function MeetingRoom() {
  const [name, setName] = useState<string>("");
  const [roomId, setRoomId] = useState<string>("");
  const [socket, setSocket] = useState<Socket | null>(null);
  const [activeUsers, setActiveUsers] = useState([]);
  const [startCamera, setStartCamera] = useState(false);
  // let socket: Socket;

  // const joinRoom = () => {
  //   socket.emit("join-room"), { roomId: roomId, userName: name };
  // };
  const startingCamera = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    if (status === "granted") {
      setStartCamera(true);
    } else {
      Alert.alert("Access Denied");
    }
  };

  const joinRoom = () => {
    startingCamera();
    if (socket) {
      socket.emit("join-room", { roomId: roomId, userName: name });
      // console.log("click");
    } else {
      console.error("Socket is not connected");
    }
  };

  useEffect(() => {
    // const API_URL = "http://localhost:4000";
    // // For Android:
    // const API_URL = "http://10.0.2.2:4000";

    // // For iOS:
    // const API_URL = "http://127.0.0.1:4000";
    const API_URL = Platform.select({
      android: "http://10.0.2.2:4000",
      ios: "http://127.0.0.1:4000",
    });
    const newSocket = io(`${API_URL}`, {
      transports: ["websocket"],
      reconnectionAttempts: 3,
    });
    setSocket(newSocket);
    // console.log("meeting");
    newSocket.on("connect", () => {
      console.log("connected to socket server");
    });

    newSocket.on("disconnect", () => {
      console.log("disconnected from socket server");
    });

    newSocket.on("connect_error", (error) => {
      console.error("Socket connection error:", error);
    });

    newSocket.on("all-users", (users) => {
      console.log("Active users");
      console.log(users);

      setActiveUsers(users);
    });

    // setSocket(newSocket);

    // Cleanup on unmount
    return () => {
      newSocket.disconnect();
    };
  }, []);

  return (
    <View style={styles.container}>
      {startCamera ? (
        // <Text>Start Camera</Text>
        <SafeAreaView style={{ flex: 1 }}>
          <View style={styles.cameraContainer}>
            <CameraView style={{ width: "100%", height: 600 }} facing="front" />
            {activeUsers.map((user, index) => (
              <View style={styles.activeUserContainer} key={index}>
                <Text style={{ color: "white" }}>{user.userName}</Text>
              </View>
            ))}
          </View>

          <View style={styles.menu}>
            {menuIcons.map((icon: MenuIcon, index) => (
              <TouchableOpacity style={styles.tile}>
                <FontAwesome name={icon.name} size={30} color="#efefef" />
                <Text style={styles.textTile}>{icon.title}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </SafeAreaView>
      ) : (
        <StartMeeting
          name={name}
          setName={setName}
          roomId={roomId}
          setRoomId={setRoomId}
          // socket={socket}
          joinRoom={joinRoom}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1c1c1c",
  },
  menu: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  textTile: {
    color: "white",
    marginTop: 10,
  },
  tile: {
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    marginTop: 15,
    marginBottom: 10,
  },
  cameraContainer: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
  },
  activeUserContainer: {},
});
