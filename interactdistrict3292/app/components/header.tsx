import React from "react";
import { View, Text, Image, Dimensions } from "react-native";
import appColors from "./colors/colors";
import {
  Fontisto,
  Ionicons,
  EvilIcons,
  MaterialCommunityIcons,
  Feather,
  MaterialIcons,
} from "@expo/vector-icons";
export default function Header() {
  return (
    <View
      style={{
        padding: 13,
        marginTop: 10,
        borderBottomWidth: 0.3,
        alignContent: "center",
        justifyContent: "center",
        borderBottomColor: appColors.blue,
      }}
    >
      <Text style={{ fontSize: 16, fontWeight: "bold" }}>
        Interact District 3292
      </Text>
      <Image
        style={{
          width: 30,
          height: 30,
          alignContent: "center",

          resizeMode: "cover",
          borderRadius: 25,
          position: "absolute",
          right: 10,
        }}
        source={require("../../assets/images/halftheme.png")}
      />
    </View>
  );
}
