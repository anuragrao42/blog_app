import React, { useState, useContext } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import { Context } from "../context/blogContext";

const CreateScreen = ({ navigation }) => {
  const [tytl, setTytl] = useState("");
  const [descrp, setDescrp] = useState("");
  const { addBlogposts } = useContext(Context);

  const createPress = () => {
    addBlogposts(tytl, descrp);
    setTytl("");
    setDescrp("");
    // navigation.navigate("Index");
    navigation.pop();
  };

  return (
    <View>
      <Text style={styles.text}>Title: </Text>
      <TextInput
        maxLength={25}
        value={tytl}
        onChangeText={(newTitle) => {
          setTytl(newTitle);
        }}
        style={styles.textInput}
      />
      <Text style={styles.text}>Content: </Text>
      <TextInput
        multiline
        value={descrp}
        onChangeText={(newDescrp) => {
          setDescrp(newDescrp);
        }}
        style={styles.textInput}
      />
      <Button title="Create" onPress={createPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    padding: 4,
    marginHorizontal: 10,
    marginBottom: 20,
  },
  text: {
    marginHorizontal: 10,
    fontSize: 18,
  },
});

export default CreateScreen;
