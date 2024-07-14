import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const Task = (props) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <Pressable onPress={() => alert("Coming soon!")}>
          <AntDesign
            name="dingding"
            size={24}
            color="white"
            style={styles.check}
          />
        </Pressable>
        <Text style={styles.itemText}>{props.text}</Text>
      </View>
      <Ionicons name="close-sharp" size={24} color="white" />
    </View>
  );
};

export default Task;

const styles = StyleSheet.create({
  item: {
    backgroundColor: "rgba(170,200,225,.8)",
    padding: 20,
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 12,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  check: {
    marginRight: 10,
  },
  itemText: {
    fontSize: 15,
    maxWidth: "80%",
    color: "white",
  },
});
