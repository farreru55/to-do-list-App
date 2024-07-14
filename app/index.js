import {
  StyleSheet,
  Text,
  View,
  Platform,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  Keyboard,
  ScrollView,
  ImageBackground,
  Dimensions,
} from "react-native";
import { useNavigation } from "expo-router";
import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { FontAwesome } from "@expo/vector-icons";

import Task from "../components/Task";
const wallpaper = require("../assets/images/wallpaper2.png");

const Home = () => {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);
  };

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };

  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  return (
    <>
      <View style={styles.container}>
        <ImageBackground source={wallpaper} style={styles.wallpaper}>
          <ScrollView
            contentContainerStyle={{
              flexGrow: 1,
            }}
            keyboardShouldPersistTaps="handled"
          >
            <View style={styles.content}>
              <Text style={styles.headerText}>Today's To Do List</Text>

              {/* Item */}
              <View style={styles.item}>
                {taskItems.map((item, index) => {
                  return (
                    <TouchableOpacity
                      key={index}
                      onPress={() => completeTask(index)}
                    >
                      <Task text={item} />
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>

            {/* Add Task */}
            <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : "height"}
              style={styles.addTaskContainer}
            >
              <TextInput
                style={styles.input}
                placeholder={"Add New To Do"}
                placeholderTextColor="white"
                value={task}
                onChangeText={(text) => setTask(text)}
              />
                <FontAwesome
                  name="plus-square-o"
                  size={24}
                  color="white"
                  onPress={() => handleAddTask()}
                />
            </KeyboardAvoidingView>
          </ScrollView>
        </ImageBackground>
      </View>
      <StatusBar style="light" />
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  wallpaper: {
    position: "absolute",
    left: 0,
    top: 0,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    alignItems: "center",
  },
  content: {
    padding: 7,
  },
  headerText: {
    paddingTop: 40,
    marginBottom: 5,
    padding: 14,
    color: "white",
    fontWeight: "bold",
    fontSize: 30,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  item: {
    marginTop: 10,
  },
  addTaskContainer: {
    position: "relative",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    backgroundColor: "rgba(170,200,225,.8)",
    color: "white",
    padding: 15,
    width: "85%",
    borderRadius: 20,
    marginBottom: 10,
  },
});
