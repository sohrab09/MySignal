import { StyleSheet, FlatList, View } from "react-native";
import React from "react";
import Message from "../components/Message/Message";
import chatRoomData from "../assets/dummy-data/Chats";

const ChatRoomScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={chatRoomData.messages}
        renderItem={({ item }) => <Message message={item} />}
        keyExtractor={(item) => item.id}
      />
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
