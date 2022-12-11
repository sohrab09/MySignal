import { StyleSheet, Text, View } from "react-native";
import React from "react";

const blue = "#3777f0";
const grey = "lightgrey";

const myId = "u1";

type MessageProps = {
  message: any;
};

const Message = ({ message }: MessageProps) => {
  const isMyMessage = message.user.id === myId;

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: isMyMessage ? grey : blue,
          marginLeft: isMyMessage ? "auto" : 10,
          marginRight: isMyMessage ? 10 : "auto",
          alignSelf: isMyMessage ? "flex-end" : "flex-start"
        }
      ]}
    >
      <Text style={{ color: isMyMessage ? "black" : "white" }}>
        {message.content}
      </Text>
    </View>
  );
};

export default Message;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#3777f0",
    padding: 10,
    margin: 10,
    borderRadius: 10,
    maxWidth: "75%"
  }
});
