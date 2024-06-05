import React, { useEffect } from "react";
import {
    Image,
    StyleSheet,
    Platform,
    View,
    Text,
    ScrollView,
    SafeAreaView,
    TouchableOpacity,
    Dimensions,
    FlatList,
    Pressable,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import ListProjectComponent from "../components/listprojects";
import appColors from "../components/colors/colors";
import { getProjects } from "../components/api/hitApi";
import SearchBar from "../components/searchBar";
import Header from "../components/header";

export default function HomeScreen() {
    const [projects, setProjects] = React.useState([]);
    const [choosenFilter, setChoosenFilter] = React.useState("All");
    const filterOptions = [
        { name: "All", value: "All" },
        { name: "Community", value: "Community" },
        { name: "Club", value: "Club" },
        { name: "District", value: "District" },
        { name: "International", value: "International" },
        { name: "Other", value: "Other" },
    ];

    useEffect(() => {
        async function getProjectsInfo() {
            let response = await getProjects();
            setProjects(response);
        }
        getProjectsInfo();
    }, []);


    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: "white"
            }}
        >
            <StatusBar backgroundColor="#fff" />
            <ScrollView
                stickyHeaderIndices={[2]}
                style={{
                    flex: 1,

                    padding: 10,
                    paddingTop: Platform.OS === "android" ? 25 : 0,
                }}>
                <Header />
                <View
                    style={{
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        marginVertical: 16,
                    }}
                >
                    <FlatList
                        initialNumToRender={10}
                        showsHorizontalScrollIndicator={false}
                        horizontal
                        data={projects}
                        renderItem={({ item, index }) => (
                            <TouchableOpacity
                                key={index}
                                activeOpacity={0.8}

                                style={{
                                    flex: 1,
                                    width: Dimensions.get("window").width - 50,
                                    height: 180,
                                    display: "flex",
                                    marginRight: 10,
                                    alignSelf: "center",
                                    borderRadius: 10,
                                }}
                            >
                                <Image
                                    style={{
                                        borderRadius: 10,
                                        width: "100%",
                                        resizeMode: "cover",
                                    }}
                                    height={180}
                                    source={{
                                        uri: item?.featured_image_urls?.full[0],
                                    }}
                                />
                                <Text
                                    style={{
                                        fontFamily: "Roboto",
                                        fontSize: 15,
                                        elevation: 5,
                                        shadowColor: appColors.blue,
                                        shadowOffset: { width: 0, height: 2 },
                                        shadowOpacity: 0.25,
                                        shadowRadius: 3.84,
                                        margin: 10,
                                        marginTop: -50,
                                        width: 270,
                                        fontWeight: "800",
                                        color: appColors.white,
                                        alignSelf: "flex-start",
                                    }}
                                >
                                    {item?.title?.rendered}
                                </Text>
                            </TouchableOpacity>
                        )}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>

                <View style={{ backgroundColor: appColors.white }}>
                    <SearchBar />

                    <View style={{ marginVertical: 10 }}>
                        <ScrollView
                            showsHorizontalScrollIndicator={false}
                            horizontal
                            contentContainerStyle={{
                                gap: 8,

                            }}
                        >
                            {filterOptions.map((filterOption, index) => (
                                <Pressable
                                    onPress={() => {
                                        setChoosenFilter(filterOption.name);
                                    }}
                                    key={`Chips-${index}`}
                                    style={{
                                        paddingHorizontal: 20,
                                        paddingVertical: 10,
                                        elevation: 5,
                                        backgroundColor:
                                            filterOption.name === choosenFilter
                                                ? appColors.blue
                                                : appColors.boxGrey,
                                        borderRadius: 8,
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                >
                                    <Text
                                        style={{
                                            color:
                                                filterOption.name === choosenFilter
                                                    ? appColors.white
                                                    : appColors.black,
                                            fontSize: 12,
                                            fontWeight: "700",
                                        }}
                                    >
                                        {filterOption.name}
                                    </Text>
                                </Pressable>
                            ))}
                        </ScrollView>
                    </View>
                </View>

                <FlatList
                    initialNumToRender={10}
                    data={projects}
                    renderItem={({ item, index }) => (
                        <ListProjectComponent data={item} />
                    )}
                    keyExtractor={(item, index) => index.toString()}
                />

            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({});
