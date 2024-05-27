import React from "react";
import { Text, TextInput, View } from "react-native";
import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "react-native/Libraries/NewAppScreen";
import colors from "./colors/colors";
export default function SearchBar({}) {
  return (
    <View
      style={{
        width: "100%",
        shadowColor: colors.purple,
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 3.84,
        elevation: 5,
        height: 55,
        backgroundColor: colors.white,
        borderRadius: 10,

        display: "flex",
        flexDirection: "row",
      }}
    >
      <TextInput
        onChangeText={(text) => {
          console.log("text", text);
        }}
        placeholder={"Search Projects"}
        style={{
          width: "85%",
          height: 50,
          fontSize: 18,
          backgroundColor: colors.white,
          borderTopLeftRadius: 10,
          borderBottomLeftRadius: 10,
          color: colors.black,
          padding: 12,
        }}
      />
      <View
        style={{
          width: "15%",
          height: 55,
          backgroundColor: colors.blue,
          borderTopRightRadius: 10,
          borderBottomRightRadius: 10,
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: 20,
            height: 20,
            borderRadius: 10,
            backgroundColor: colors.blue,
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <Ionicons name="search-outline" size={24} color={colors.white} />
          {/* <Feather name="arrow-up" size={16} color={colors.white} /> */}
        </View>
      </View>
    </View>
  );
}
