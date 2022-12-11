import { View, Text, Image } from "react-native";
import styles from "./Styles";
import React from "react";

type ChatRoomItemProps = {
  chatRoom: any;
};

const ChatRoomItem = ({ chatRoom }: ChatRoomItemProps) => {
  const user = chatRoom.users[1];
  console.log("🚀 ~ file: ChatRoomItem.tsx:12 ~ ChatRoomItem ~ user", user);

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: user.imageUri
        }}
      />
      {chatRoom.newMessages && (
        <View style={styles.badgeContainer}>
          <Text style={styles.badgeText}>{chatRoom.newMessages}</Text>
        </View>
      )}
      <View style={styles.models}>
        <View style={styles.model}>
          <Text numberOfLines={1} style={styles.name}>
            {user.name}
          </Text>
          {/* <Text style={styles.time}>{user.lastMessage.createdAt}</Text> */}
        </View>
        <Text numberOfLines={1} style={styles.message}>
          {/* {user.lastMessage.content} */}
        </Text>
      </View>
    </View>
  );
};

export default ChatRoomItem;
