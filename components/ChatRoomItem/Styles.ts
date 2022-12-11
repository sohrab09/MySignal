import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 50
  },
  badgeContainer: {
    backgroundColor: "#3872E9",
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    left: 50,
    top: 10,
    borderWidth: 1,
    borderColor: "white"
  },
  badgeText: {
    color: "white",
    fontSize: 12
  },
  models: {
    flex: 1,
    justifyContent: "center",
    padding: 10
  },
  model: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  name: {
    fontSize: 16,
    color: "black",
    marginBottom: 5
  },
  time: {
    color: "gray"
  },
  message: {
    color: "gray",
    fontSize: 14
  }
});

export default styles;