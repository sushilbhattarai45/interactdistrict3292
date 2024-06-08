import React from "react";
import { Pressable, Text, View, StatusBar, SafeAreaView } from "react-native";
import { Link, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import * as Constants from "expo-constants";
import { router } from "expo-router";
import { Platform } from "react-native";
type Props = {
    name: string;
};

export default function NavBar() {
    const router = useRouter();
    return (
        <SafeAreaView style={{
            flex: 1,
            zIndex: 10,

            marginHorizontal: 16,
            position: "absolute",
            top: StatusBar.currentHeight,
        }}>

            <StatusBar backgroundColor="#000000" style="light" />
            <Pressable
                onPress={() => {
                    router.back();
                }
                }
                style={{
                    backgroundColor: "white",
                    padding: 8,
                    borderRadius: 24,
                    opacity: 0.8,
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                }}
            >
                <Ionicons name="arrow-back-sharp" size={24} color={"blac"} />
            </Pressable>
        </SafeAreaView>
    );
}
