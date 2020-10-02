import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import { Context } from "../context/blogContext";
import { AntDesign } from "@expo/vector-icons";

const ShowScreen = ({ navigation }) => {
  const { state } = useContext(Context);
  const id = navigation.getParam("id");

  const blogPost = state.find((item) => item.id === id);

  return (
    <View>
      <Text style={styles.textHeaders}>Title: </Text>
      <Text style={styles.texts}>{blogPost.title} </Text>
      <Text style={styles.textHeaders}>Description: </Text>
      <Text style={styles.texts}>{blogPost.description} </Text>
    </View>
  );
};

ShowScreen.navigationOptions = ({ navigation }) => {
  const id = navigation.getParam("id");
  return {
    headerRight: () => (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Edit", { id });
        }}
      >
        <AntDesign
          name="edit"
          size={34}
          style={{ padding: 10, color: "gray" }}
        />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  textHeaders: { fontSize: 18, fontWeight: "bold", margin: 10 },
  texts: {
    fontSize: 16,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
    margin: 10,
    backgroundColor: "gray",
    color: "white",
  },
});

export default ShowScreen;
