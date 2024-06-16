import React from "react";
import { Pressable, Text, View, StatusBar, SafeAreaView } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";


export default function NavBar() {
    const router = useRouter();
    const insets = useSafeAreaInsets()
    return (
        <SafeAreaView style={{
            flex: 1,
            zIndex: 10,

            marginHorizontal: 16,
            position: "absolute",
            top: insets.top + 16,
        }}>
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
