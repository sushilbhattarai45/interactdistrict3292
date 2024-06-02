import React from "react";
import { Pressable, Text, View, StatusBar, SafeAreaView } from "react-native";
import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import * as Constants from "expo-constants";
import { router } from "expo-router";
import { Platform } from "react-native";
type Props = {
  name: string;
};

export default function NavBar(props) {
  return (
    <View style={{ zIndex: 1, flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <Pressable
          style={{
            zIndex: 1,
            flex: 1,
            position: "absolute",
            top: Platform.OS === "ios" ? 30 : 20,

            marginHorizontal: 8,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Ionicons name="arrow-back-sharp" size={24} color={"black"} />
          <Text
            style={{
              marginLeft: 16,
              fontSize: 18,
              color: "black",
              fontWeight: "bold",
            }}
          >
            {props.name} Screen
          </Text>
        </Pressable>
      </SafeAreaView>
    </View>
  );
}
