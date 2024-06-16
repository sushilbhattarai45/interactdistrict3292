import { Tabs } from "expo-router";
import React from "react";
import { Image } from "react-native";
import {
    FontAwesome,
    Ionicons,
    MaterialCommunityIcons,
    MaterialIcons,
} from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import appColors from "../components/colors/colors";

export default function TabLayout() {
    const colorScheme = useColorScheme();

    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarStyle: {},
                tabBarShowLabel: false,
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: "Home",
                    tabBarIcon: ({ color, focused }) => (
                        <Image
                            source={require("../../assets/images/interact-wheel.png")}
                            style={{
                                height: 28,
                                aspectRatio: 1,
                                alignContent: "center",
                                resizeMode: "cover",
                                tintColor: focused ? appColors.blue : appColors.grey
                            }}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="teams"
                options={{
                    title: "Teams",
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons name={focused ? 'people' : 'people-outline'} size={28} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="resources"
                options={{
                    title: "Teams",
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons name={focused ? "attach" : "attach"} size={28} color={color} />
                    ),
                }}
            />
        </Tabs>
    );
}
