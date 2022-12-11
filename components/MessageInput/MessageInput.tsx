import {
  StyleSheet,
  View,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  Platform
} from "react-native";
import React, { useState } from "react";
import {
  SimpleLineIcons,
  Feather,
  MaterialCommunityIcons,
  AntDesign
} from "@expo/vector-icons";

const MessageInput = () => {
  const [message, setMessage] = useState("");

  const onMicrophonePress = () => {
    console.warn("Microphone");
  };

  const handleSendMessage = () => {
    console.warn(`Sending: ${message}`);
    setMessage("");
  };

  const onPlusClicked = () => {
    console.warn("On Plus Clicked");
  };

  const onPress = () => {
    if (message) {
      handleSendMessage();
    } else {
      onPlusClicked();
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.root}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={100}
    >
      <View style={styles.inputContainer}>
        <SimpleLineIcons
          name="emotsmile"
          size={24}
          color="#595959"
          style={styles.icon}
        />
        <TextInput
          placeholder="Send message ..."
          style={styles.textInput}
          value={message}
          onChangeText={setMessage}
        />
        <Feather name="camera" size={24} color="#595959" style={styles.icon} />
        <MaterialCommunityIcons
          name="microphone"
          size={24}
          color="#595959"
          style={styles.icon}
          onPress={onMicrophonePress}
        />
      </View>
      <Pressable style={styles.buttonContainer} onPress={onPress}>
        {!message ? (
          <AntDesign name="plus" size={24} color="white" />
        ) : (
          <MaterialCommunityIcons
            name="send"
            size={24}
            color="white"
            style={styles.icon}
          />
        )}
      </Pressable>
    </KeyboardAvoidingView>
  );
};

export default MessageInput;

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    padding: 10
  },
  inputContainer: {
    backgroundColor: "#f2f2f2",
    borderWidth: 1,
    borderColor: "#dedede",
    flex: 1,
    marginRight: 10,
    borderRadius: 25,
    alignItems: "center",
    flexDirection: "row",
    padding: 5
  },
  textInput: {
    flex: 1,
    marginHorizontal: 5
  },
  icon: {
    marginHorizontal: 5
  },
  buttonContainer: {
    backgroundColor: "#3777f0",
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25
  },
  buttonText: {
    color: "white",
    fontSize: 35
  }
});
