import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Context } from "../context/blogContext";
import { FontAwesome, AntDesign } from "@expo/vector-icons";

const indexScreen = ({ navigation }) => {
  const { state, deleteBlog } = useContext(Context);

  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Show", { id: item.id });
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginHorizontal: 10,
                  borderTopWidth: 1,
                  borderTopColor: "gray",
                  marginTop: 6,
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                  }}
                >
                  {item.title}
                </Text>
                <TouchableOpacity onPress={() => deleteBlog(item.id)}>
                  <FontAwesome
                    name="trash"
                    size={30}
                    style={{ alignSelf: "center", color: "gray" }}
                  />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

indexScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate("Create")}>
        <AntDesign
          name="plussquareo"
          size={34}
          style={{ padding: 10, color: "gray" }}
        />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({});

export default indexScreen;
