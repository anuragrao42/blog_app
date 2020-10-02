import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { Context } from "../context/blogContext";

const EditScreen = ({ navigation }) => {
  const { state, editBlog } = useContext(Context);
  const id = navigation.getParam("id");
  const blogPost = state.find((item) => item.id === id);

  const [tytl, setTytl] = useState(blogPost.title);
  const [descrp, setDescrp] = useState(blogPost.description);

  const blogEdit = () => {
    editBlog(tytl, descrp, id);
    // navigation.navigate("Show");
    navigation.pop();
  };

  return (
    <View>
      <Text
        style={{
          fontSize: 24,
          flexDirection: "row",
          alignSelf: "center",
          color: "gray",
          fontWeight: "bold",
          borderBottomColor: "silver",
          borderBottomWidth: 3,
        }}
      >
        Edit Blog
      </Text>
      <Text style={styles.textHeaders}>Title: </Text>
      <TextInput
        maxLength={25}
        style={styles.texts}
        value={tytl}
        onChangeText={(text) => {
          setTytl(text);
        }}
      />
      <Text style={styles.textHeaders}>Description: </Text>
      <TextInput
        multiline
        style={styles.texts}
        value={descrp}
        onChangeText={(text) => {
          setDescrp(text);
        }}
      />
      <Button title="Save" onPress={blogEdit} />
    </View>
  );
};
const styles = StyleSheet.create({
  textHeaders: { fontSize: 18, fontWeight: "bold", margin: 10 },
  texts: {
    fontSize: 16,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
    margin: 10,
    padding: 5,
    marginBottom: 20,
  },
});

export default EditScreen;
