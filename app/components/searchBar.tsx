import React from "react";
import { Text, TextInput, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import colors from "./colors/colors";
import { StatusBar } from "expo-status-bar";

export default function SearchBar({ setFilterProjects, projects }: { setFilterProjects: any, projects: any }) {

    const handleSearch = (text) => {
        if (text === "") {
            setFilterProjects(projects);
            return;
        }
        setFilterProjects(
            projects.filter((project: any) => {
                return project.title.rendered.toLowerCase().includes(text.toLowerCase());
            })
        );
    }
    return (
        <View
            style={{
                width: "100%",
                backgroundColor: colors.boxGrey,
                borderRadius: 10,
                display: "flex",
                flexDirection: "row",
            }}
        >
            <StatusBar backgroundColor="#fff" />
            <TextInput
                onChangeText={(text) => {
                    handleSearch(text);
                    console.log("text", text);
                }}
                placeholder={"Search Projects"}
                placeholderTextColor={colors.grey}
                style={{
                    paddingHorizontal: 10,
                    paddingVertical: 12,
                    flex: 1,
                    fontSize: 16,
                    color: colors.black,
                }}
            />
            <View
                style={{
                    width: 50,
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
                </View>
            </View>
        </View>
    );
}
