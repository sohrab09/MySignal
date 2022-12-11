import { StyleSheet, View } from "react-native";
import ChatRoomItem from "../components/ChatRoomItem/ChatRoomItem";

import chatRoomsData from "../assets/dummy-data/ChatRooms";

const chatRoom1 = chatRoomsData[0];
const chatRoom2 = chatRoomsData[1];

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <ChatRoomItem chatRoom={chatRoom1} />
      <ChatRoomItem chatRoom={chatRoom2} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
