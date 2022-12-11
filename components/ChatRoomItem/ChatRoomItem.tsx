import { View, Text, Image, Pressable } from "react-native";
import styles from "./Styles";
import React from "react";
import { useNavigation } from "@react-navigation/native";

type ChatRoomItemProps = {
  chatRoom: any;
};

const ChatRoomItem = ({ chatRoom }: ChatRoomItemProps) => {
  const navigation = useNavigation();

  const user = chatRoom.users[1];

  const onPress = () => {
    // @ts-ignore
    navigation.navigate("ChatRoom", {
      id: chatRoom.id,
      name: user.name
    });
  };

  return (
    <Pressable style={styles.container} onPress={onPress}>
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
          <Text style={styles.time}>{chatRoom.lastMessage.createdAt}</Text>
        </View>
        <Text numberOfLines={1} style={styles.message}>
          {chatRoom.lastMessage.content}
        </Text>
      </View>
    </Pressable>
  );
};

export default ChatRoomItem;
