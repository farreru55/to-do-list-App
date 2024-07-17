import { StyleSheet, Text, View, Pressable } from "react-native";
import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const Task = (props) => {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheck = () => {
    setIsChecked(!isChecked);
  };

  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <Pressable onPress={handleCheck}>
          {isChecked ? (
            <FontAwesome
              name="check-square-o"
              size={25}
              color="white"
              style={styles.check}
            />
          ) : (
            <Feather
              name="square"
              size={24}
              color="white"
              style={styles.check}
            />
          )}
        </Pressable>
        <Text style={isChecked ? styles.itemChecked : styles.itemText}>
          {props.text}
        </Text>
      </View>
      <Pressable onPress={props.onDelete}>
        <Ionicons name="close-sharp" size={24} color="white" />
      </Pressable>
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
  itemChecked: {
    textDecorationLine: "line-through",
    fontSize: 15,
    maxWidth: "80%",
    color: "white",
  },
  itemText: {
    fontSize: 15,
    maxWidth: "80%",
    color: "white",
  },
});
