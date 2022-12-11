import { StyleSheet, FlatList, View } from "react-native";
import React from "react";
import Message from "../components/Message/Message";
import chatRoomData from "../assets/dummy-data/Chats";
import MessageInput from "../components/MessageInput/MessageInput";

const ChatRoomScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={chatRoomData.messages}
        renderItem={({ item }) => <Message message={item} />}
        keyExtractor={(item) => item.id}
      />
      <MessageInput />
    </View>
  );
};

export default ChatRoomScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
