import { StyleSheet, FlatList, View } from "react-native";
import React, { useEffect } from "react";
import Message from "../components/Message/Message";
import chatRoomData from "../assets/dummy-data/Chats";
import MessageInput from "../components/MessageInput/MessageInput";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";

const ChatRoomScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();

  useEffect(() => {
    // @ts-ignore
    navigation.setOptions({ title: route.params.name });
  }, [navigation, route]);

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
